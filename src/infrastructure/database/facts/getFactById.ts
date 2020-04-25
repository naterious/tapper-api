import { tryP } from 'fluture';
import * as r from 'ramda';

import { GetFactById } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetFactById => (id) => {

  return tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const facts = db.collection('Facts');

      return tryP(() => facts.find({ _id: id }).toArray());
    })
    .map((result) => {
      return r.head(result);
    })
    .mapRej((err) => err);
};