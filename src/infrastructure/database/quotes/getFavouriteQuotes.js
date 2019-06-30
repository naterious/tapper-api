// @flow
import Fluture from 'fluture';
import * as r from 'ramda';

import type { GetFavourties } from '../../../core/contracts';

export default (client): GetFavourties => (id) => {

  return Fluture.tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');
      const quotes = db.collection('Quotes');

      return Fluture.tryP(() => users.find({ _id: id }).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);

          const flutures = r.map((favId) => {
            return Fluture.tryP(() => quotes.find({ _id: favId }).toArray());
          })(user.favouriteQuotes);

          return Fluture.parallel(Infinity, flutures);
        })
        .map((favsArray) => r.unnest(favsArray));
    })
    .map((result) => result)
    .mapRej((err) => err);
};