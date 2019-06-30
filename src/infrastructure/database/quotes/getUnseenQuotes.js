// @flow
import Fluture from 'fluture';
import * as r from 'ramda';

import type { GetUnseenQuotes } from '../../../core/contracts';

export default (client): GetUnseenQuotes => (id) => {

  return Fluture.tryP(() => client.connect())
    .chain(() => {

      const db = client.db('TriviaTapper');
      const users = db.collection('users');
      const quotes = db.collection('Quotes');

      return Fluture.tryP(() => users.find({ _id: id }).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);
          if (r.isEmpty(user.seenQuotes)){
            return Fluture.of([]);
          }
          const flutures = r.map((seenId) => {
            return Fluture.tryP(() => quotes.find({ _id: seenId }).toArray());
          })(user.seenQuotes);

          return Fluture.parallel(Infinity, flutures);
        })
        .chain((seenArray) => {
          const seenQuotes = r.unnest(seenArray);
          return Fluture.tryP(() => quotes.find({}).toArray())
            .map((allQuotes) => r.without(seenQuotes, allQuotes));

        });
    })
    .map((result) => result)
    .mapRej((err) => err);
};