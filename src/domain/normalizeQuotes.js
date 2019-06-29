/* eslint-disable import/prefer-default-export */
// @flow
import * as r from 'ramda';

const extractQuote = (detail) => {
  const temp = r.split('-', detail);
  return r.ifElse(
    r.equals(1),
    () => `${temp[0]} - Unknown`,
    () => temp[0],
  )(r.length(temp));
};

export const normalizeQuotes = (quotesArray) => {
  return r.map((quote) => {
    return extractQuote(quote);
  })(quotesArray);
};