import * as r from 'ramda';

import { GetAllQuotes } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetAllQuotes => async () => {

  try {
    await client.connect();
    const db = client.db('TriviaTapper');
    const quotes = db.collection('Quotes');

    const result = await quotes.find({}).toArray();

    return r.map((quote: {
      quote: string;
      id: string;
    }) => quote.quote)(result);
  }
  catch (err) {
    return err;
  }
};