// @flow
import Fluture from 'fluture';
import * as r from 'ramda';

import type { GetAllFacts } from '../../../core/contracts';

export default (client): GetAllFacts => () => {

  return Fluture.tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const facts = db.collection('Facts');

      return Fluture.tryP(() => facts.find({}).toArray());
    })
    .map((result) => {
      return r.map((fact) => {
        return fact.fact;
      })(result);
    })
    .mapRej((err) => err);

};