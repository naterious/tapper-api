import * as r from 'ramda';

import { GetQuoteById } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetQuoteById => async (id) => {
  try {
    await client.connect();
    const db = client.db('TriviaTapper');
    const quotes = db.collection('Quotes');
    const result = await quotes.find({ _id: id }).toArray();
    return r.head(result);
  }
  catch (err) {
    return err;
  }
};