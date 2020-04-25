import * as r from 'ramda';

import { AddFactsToDatabase } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): AddFactsToDatabase => (data) => {
  return r.ifElse(
    r.isEmpty,
    () => Promise.resolve(0),
    async() => {
      try {
        await client.connect();
        const db = client.db('TriviaTapper');
        await db.collection('Facts').insertMany(data);

        return r.length(data);
      } catch (err) {
        return err;
      }
    }
  )(data);
};