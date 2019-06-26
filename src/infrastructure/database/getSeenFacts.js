// @flow
import Fluture from 'fluture';
import * as r from 'ramda';

import type { GetSeenFacts } from '../../core/contracts';

export default (client) => (id) => {

  return Fluture.tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');
      const facts = db.collection('Facts');

      return Fluture.tryP(() => users.find({_id: id}).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);

          const flutures = r.map((seenId) => {
            return Fluture.tryP(() => facts.find({_id: seenId}).toArray())
          })(user.seenFacts);
          
          return Fluture.parallel(Infinity, flutures)
        })
        .map((seenArray) => r.unnest(seenArray))
    })
    .map((result) => result)
    .mapRej((err) => err)
}