import { tryP, of, parallel } from 'fluture';
import * as r from 'ramda';

import { GetUnseenFacts } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetUnseenFacts => (id) => {

  return tryP(() => client.connect())
    .chain(() => {

      const db = client.db('TriviaTapper');
      const users = db.collection('users');
      const facts = db.collection('Facts');

      return tryP(() => users.find({ _id: id }).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);
          if (r.isEmpty(user.seenFacts)){
            return of([]);
          }
          const flutures = r.map((seenId) => {
            return tryP(() => facts.find({ _id: seenId }).toArray());
          })(user.seenFacts);

          return parallel(Infinity, flutures);
        })
        .chain((seenArray) => {
          const seenFacts = r.unnest(seenArray);
          return tryP(() => facts.find({}).toArray())
            .map((allFacts) => r.without(seenFacts, allFacts));

        });
    })
    .map((result) => result)
    .mapRej((err) => err);
};