import { tryP } from 'fluture';
import * as r from 'ramda';

import { RemoveFactFromFavourites } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): RemoveFactFromFavourites => (details) => {

  return tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');

      return tryP(() => users.find({ _id: details.userId }).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);
          const newFavourites = r.without(
            [ details.factId ],
            user.favouriteFacts,
          );
          return tryP(() => db.collection('users').updateOne(
            { _id: user._id },
            { $set: { favouriteFacts: newFavourites } },
          ));
        });
    })
    .map(() => 'OK')
    .mapRej((err) => err);
};