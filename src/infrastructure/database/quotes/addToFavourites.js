// @flow
import Fluture from 'fluture';
import * as r from 'ramda';

import type { AddFactToFavourites } from '../../../core/contracts';

export default (client): AddFactToFavourites => (details) => {

  return Fluture.tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');

      return Fluture.tryP(() => users.find({ _id: details.userId }).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);
          const newFavourites = r.append(details.quoteId, user.favouriteQuotes);

          return Fluture.tryP(() => db.collection('users').updateOne(
            // eslint-disable-next-line no-underscore-dangle
            { _id: user._id },
            { $set: { favouriteQuotes: newFavourites } },
          ));
        });
    })
    .map(() => 'OK')
    .mapRej((err) => err);
};