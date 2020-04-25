import { tryP } from 'fluture';
import * as r from 'ramda';

import { GetQuoteById } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetQuoteById => (id) => {

  return tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const quotes = db.collection('Quotes');

      return tryP(() => quotes.find({ _id: id }).toArray());
    })
    .map((result) => r.head(result))
    .mapRej((err) => err);
};