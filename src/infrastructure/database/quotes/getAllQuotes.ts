import { tryP } from 'fluture';
import * as r from 'ramda';

import { GetAllQuotes } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetAllQuotes => () => {

  return tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const quotes = db.collection('Quotes');

      return tryP(() => quotes.find({}).toArray());
    })
    .map((result) => {
      return r.map((quote: {
        quote: string,
        id: string,
      }) => {
        return quote.quote;
      })(result);
    })
    .mapRej((err) => err);

};