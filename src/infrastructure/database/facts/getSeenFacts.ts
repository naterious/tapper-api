import { tryP, parallel } from 'fluture';
import * as r from 'ramda';

import { GetSeenFacts } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetSeenFacts => (id) => {

  return tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');
      const facts = db.collection('Facts');

      return tryP(() => users.find({ _id: id }).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);

          const flutures = r.map((seenId) => {
            return tryP(() => facts.find({ _id: seenId }).toArray());
          })(user.seenFacts);

          return parallel(Infinity, flutures);
        })
        .map((seenArray) => r.unnest(seenArray));
    })
    .map((result) => result)
    .mapRej((err) => err);
};