import * as r from 'ramda';

import { GetAllFacts } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetAllFacts => async () => {
  try {
    await client.connect();
    const db = client.db('TriviaTapper');
    const facts = db.collection('Facts');

    const result = await facts.find({}).toArray();

    return r.map((fact: {
      fact: string;
      id: string;
    }) => fact.fact)(result);
  }
  catch (err) {
    return err;
  }
};