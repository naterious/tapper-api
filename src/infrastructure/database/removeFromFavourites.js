// @flow
import Fluture from 'fluture';
import * as r from 'ramda';

import type { RemoveFromFavourites } from '../../core/contracts';

export default (client) => (details) => {

  return Fluture.tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');
      console.log('hello')

      return Fluture.tryP(() => users.find({_id: details.userId}).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);
          const newFavourites = r.without([ details.factId ], user.favouriteFacts);
          console.log(details)
          console.log(newFavourites)
          return Fluture.tryP(() => db.collection('users').updateOne(
            { _id: user._id },
            { $set: { favouriteFacts: newFavourites } },
          ));
        })
    })
    .map((res) => 'OK')
    .mapRej((err) => err)
}