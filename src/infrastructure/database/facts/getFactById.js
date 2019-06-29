// @flow
import Fluture from 'fluture';
import * as r from 'ramda';

import type { GetFactById } from '../../../core/contracts';

export default (client): GetFactById => (id) => {

  return Fluture.tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const facts = db.collection('Facts');

      return Fluture.tryP(() => facts.find({ _id: id }).toArray());
    })
    .map((result) => {
      return r.head(result);
    })
    .mapRej((err) => err);
};