// @flow
import Fluture from 'fluture';
import * as r from 'ramda';

import type { GetSeenQuotes } from '../../../core/contracts';

export default (client): GetSeenQuotes => (id) => {

  return Fluture.tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');
      const quotes = db.collection('Quotes');

      return Fluture.tryP(() => users.find({ _id: id }).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);

          const flutures = r.map((seenId) => {
            return Fluture.tryP(() => quotes.find({ _id: seenId }).toArray());
          })(user.seenQuotes);

          return Fluture.parallel(Infinity, flutures);
        })
        .map((seenArray) => r.unnest(seenArray));
    })
    .map((result) => result)
    .mapRej((err) => err);
};