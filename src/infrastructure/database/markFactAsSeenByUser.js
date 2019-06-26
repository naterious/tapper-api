// @flow
import Fluture from 'fluture';
import * as r from 'ramda';

import type { MarkFactAsSeenByUser } from '../../core/contracts';

export default (client) => (details) => {

  return Fluture.tryP(() => client.connect())
  .chain(() => {
    const db = client.db('TriviaTapper');
    const users = db.collection('users');

    return Fluture.tryP(() => users.find({_id: details.userId}).toArray())
      .chain((storedUsers) => {
        const user = r.head(storedUsers);
        const newSeen = r.append(details.factId, user.seenFacts);

        return Fluture.tryP(() => db.collection('users').updateOne(
          { _id: user._id },
          { $set: { seenFacts: newSeen } },
        ));
      })
  })
  .map((res) => 'OK')
  .mapRej((err) => err)
}