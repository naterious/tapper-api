import { tryP, parallel } from 'fluture';
import * as r from 'ramda';

import { GetFavouriteQuotes } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetFavouriteQuotes => (id) => {

  return tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');
      const quotes = db.collection('Quotes');

      return tryP(() => users.find({ _id: id }).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);

          const flutures = r.map((favId) => {
            return tryP(() => quotes.find({ _id: favId }).toArray());
          })(user.favouriteQuotes);

          return parallel(Infinity, flutures);
        })
        .map((favsArray) => r.unnest(favsArray));
    })
    .map((result) => result)
    .mapRej((err) => err);
};