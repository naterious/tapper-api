import { tryP } from 'fluture';
import * as r from 'ramda';

import { GetAllFacts } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetAllFacts => () => {

  return tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const facts = db.collection('Facts');

      return tryP(() => facts.find({}).toArray());
    })
    .map((result) => {
      return r.map((fact: {
        fact: string,
        id: string,
      }) => {
        return fact.fact;
      })(result);
    })
    .mapRej((err) => err);

};