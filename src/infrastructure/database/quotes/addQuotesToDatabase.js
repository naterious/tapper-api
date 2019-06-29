// @flow
import Fluture from 'fluture';
import * as r from 'ramda';

import type { AddQuotesToDatabase } from '../../../core/contracts';

export default (client): AddQuotesToDatabase => (data) => {

  return r.ifElse(
    r.isEmpty,
    () => Fluture.of(0),
    () => {
      return Fluture.tryP(() => client.connect())
        .chain(() => {
          const db = client.db('TriviaTapper');

          return Fluture.tryP(() => db.collection('Quotes').insertMany(data));
        })
        .map(() => {
          return r.length(data);
        })
        .mapRej((err) => err);
    }
  )(data);

};