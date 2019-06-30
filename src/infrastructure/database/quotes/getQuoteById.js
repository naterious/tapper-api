// @flow
import Fluture from 'fluture';
import * as r from 'ramda';

import type { GetQuoteById } from '../../../core/contracts';

export default (client): GetQuoteById => (id) => {

  return Fluture.tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const quotes = db.collection('Quotes');

      return Fluture.tryP(() => quotes.find({ _id: id }).toArray());
    })
    .map((result) => {
      return r.head(result);
    })
    .mapRej((err) => err);
};