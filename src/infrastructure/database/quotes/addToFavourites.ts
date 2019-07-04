import { tryP } from 'fluture';
import * as r from 'ramda';

import { AddQuoteToFavourites } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): AddQuoteToFavourites => (details) => {

  return tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');

      return tryP(() => users.find({ _id: details.userId }).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);
          const newFavourites = r.append(details.quoteId, user.favouriteQuotes);

          return tryP(() => db.collection('users').updateOne(
            // eslint-disable-next-line no-underscore-dangle
            { _id: user._id },
            { $set: { favouriteQuotes: newFavourites } },
          ));
        });
    })
    .map(() => 'OK')
    .mapRej((err) => err);
};