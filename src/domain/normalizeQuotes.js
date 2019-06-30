/* eslint-disable import/prefer-default-export */
// @flow
import * as r from 'ramda';

const extractQuote = (detail) => {
  return r.cond([
    [ r.contains('"'), () => {
      const temp = r.split('"', detail);
      return r.ifElse(
        r.equals(2),
        () => `"${temp[1]}" - Anonymous`,
        () => {
          return r.ifElse(
            r.isNil,
            () => `${temp[1]} - Anonymous}`,
            () => {
              const source = r.trim(temp[2].replace(/[^\w\s]/gi, ''));
              if (r.equals(r.toLower(source), 'me')) {
                return `${temp[1]} - Anonymous}`;
              }
              return `${temp[1]} - ${r.trim(temp[2].replace(/[^\w\s]/gi, ''))}`;
            }
          )(temp[2]);
        }
      )(r.length(temp));
    } ],
    [ r.contains('”'), () => {
      const temp = r.split('”', detail);
      return r.ifElse(
        r.equals(0),
        () => `"${temp[0].substring(1)}" - Anonymous`,
        () => {
          return r.ifElse(
            r.isNil,
            () => `"${temp[0].substring(1)}" - Anonymous`,
            () => {
              const source = r.trim(temp[1].replace(/[^\w\s]/gi, ''));
              if (r.equals(r.toLower(source), 'me')) {
                return `${temp[0].substring(1)} - Anonymous}`;
              }
              return `"${temp[0].substring(1)}" - ${r.trim(temp[1].replace(/[^\w\s]/gi, ''))}`;
            }
          )(temp[2]);
        }
      )(r.length(temp[1]));
    } ],
    [ r.T, () => detail ],
  ])(detail);

};

export const normalizeQuotes = (quotesArray) => {
  return r.map((quote) => {
    return extractQuote(quote);
  })(quotesArray);
};