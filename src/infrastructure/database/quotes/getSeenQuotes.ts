import { tryP, parallel } from 'fluture';
import * as r from 'ramda';

import { GetSeenQuotes } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetSeenQuotes => (id) => {

  return tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');
      const quotes = db.collection('Quotes');

      return tryP(() => users.find({ _id: id }).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);

          const flutures = r.map((seenId) => {
            return tryP(() => quotes.find({ _id: seenId }).toArray());
          })(user.seenQuotes);

          return parallel(Infinity, flutures);
        })
        .map((seenArray) => r.unnest(seenArray));
    })
    .map((result) => result)
    .mapRej((err) => err);
};