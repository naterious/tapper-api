// @flow
import Fluture from 'fluture';
import * as r from 'ramda';

import type { AddFactsToDatabase } from '../../../core/contracts';

export default (client): AddFactsToDatabase => (data) => {

  return r.ifElse(
    r.isEmpty,
    () => Fluture.of(0),
    () => {
      return Fluture.tryP(() => client.connect())
        .chain(() => {
          const db = client.db('TriviaTapper');

          return Fluture.tryP(() => db.collection('Facts').insertMany(data));
        })
        .map(() => {
          return r.length(data);
        })
        .mapRej((err) => err);
    }
  )(data);

};