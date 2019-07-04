import { tryP } from 'fluture';
import * as r from 'ramda';

import { MarkFactAsSeenByUser } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): MarkFactAsSeenByUser => (details) => {

  return tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');

      return tryP(() => users.find({ _id: details.userId }).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);
          const newSeen = r.append(details.factId, user.seenFacts);

          return tryP(() => db.collection('users').updateOne(
            // eslint-disable-next-line no-underscore-dangle
            { _id: user._id },
            { $set: { seenFacts: newSeen } },
          ));
        });
    })
    .map(() => 'OK')
    .mapRej((err) => err);
};