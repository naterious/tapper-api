// @flow
import Fluture from 'fluture';
import * as r from 'ramda';

import type { GetAllQuotes } from '../../../core/contracts';

export default (client): GetAllQuotes => () => {

  return Fluture.tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const quotes = db.collection('Quotes');

      return Fluture.tryP(() => quotes.find({}).toArray());
    })
    .map((result) => {
      return r.map((quote) => {
        return quote.quote;
      })(result);
    })
    .mapRej((err) => err);

};