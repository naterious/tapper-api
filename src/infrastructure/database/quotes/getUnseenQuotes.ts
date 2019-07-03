import { tryP, of, parallel } from 'fluture';
import * as r from 'ramda';

import { GetUnseenQuotes } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetUnseenQuotes => (id) => {

  return tryP(() => client.connect())
    .chain(() => {

      const db = client.db('TriviaTapper');
      const users = db.collection('users');
      const quotes = db.collection('Quotes');

      return tryP(() => users.find({ _id: id }).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);
          if (r.isEmpty(user.seenQuotes)){
            return of([]);
          }
          const flutures = r.map((seenId) => {
            return tryP(() => quotes.find({ _id: seenId }).toArray());
          })(user.seenQuotes);

          return parallel(Infinity, flutures);
        })
        .chain((seenArray) => {
          const seenQuotes = r.unnest(seenArray);
          return tryP(() => quotes.find({}).toArray())
            .map((allQuotes) => r.without(seenQuotes, allQuotes));

        });
    })
    .map((result) => result)
    .mapRej((err) => err);
};