import * as r from 'ramda';

import { AddQuotesToDatabase } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): AddQuotesToDatabase => async (data) => {

  return r.ifElse(
    r.isEmpty,
    () => 0,
    async () => {
      try {
        await client.connect();
        const db = client.db('TriviaTapper');
        await db.collection('Quotes').insertMany(data);
        return r.length(data);
      }
      catch (err) {
        return err;
      }
    }
  )(data);

};