import * as r from 'ramda';

import { GetFactById } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetFactById => async (id) => {
  try {
    await client.connect();
    const db = client.db('TriviaTapper');
    const facts = db.collection('Facts');

    const result = await facts.find({ _id: id }).toArray();

    return r.head(result);
  }
  catch (err) {
    return err;
  }
};