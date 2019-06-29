// @flow
import Fluture from 'fluture';
import * as r from 'ramda';

import type { GetUnseenFacts } from '../../../core/contracts';

export default (client): GetUnseenFacts => (id) => {

  return Fluture.tryP(() => client.connect())
    .chain(() => {

      const db = client.db('TriviaTapper');
      const users = db.collection('users');
      const facts = db.collection('Facts');

      return Fluture.tryP(() => users.find({ _id: id }).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);
          if (r.isEmpty(user.seenFacts)){
            return Fluture.of([]);
          }
          const flutures = r.map((seenId) => {
            return Fluture.tryP(() => facts.find({ _id: seenId }).toArray());
          })(user.seenFacts);

          return Fluture.parallel(Infinity, flutures);
        })
        .chain((seenArray) => {
          const seenFacts = r.unnest(seenArray);
          return Fluture.tryP(() => facts.find({}).toArray())
            .map((allFacts) => r.without(seenFacts, allFacts));

        });
    })
    .map((result) => result)
    .mapRej((err) => err);
};