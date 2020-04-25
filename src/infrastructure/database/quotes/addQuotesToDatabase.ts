import { tryP, of } from 'fluture';
import * as r from 'ramda';

import { AddQuotesToDatabase } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): AddQuotesToDatabase => (data) => {

  return r.ifElse(
    r.isEmpty,
    () => of(0),
    () => {
      return tryP(() => client.connect())
        .chain(() => {
          const db = client.db('TriviaTapper');

          return tryP(() => db.collection('Quotes').insertMany(data));
        })
        .map(() => r.length(data))
        .mapRej((err) => err);
    }
  )(data);

};