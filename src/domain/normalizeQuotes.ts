import * as r from 'ramda';
/* eslint-disable import/prefer-default-export */

import { capitalizeFirstLetter } from './normalizeFacts';

const extractQuote = (detail: string) => {
  return r.cond([
    [ r.contains('"'), () => {
      const temp = r.split('"', detail);
      return r.ifElse(
        r.equals(2),
        () => `"${capitalizeFirstLetter(temp[1])}" - Anonymous`,
        () => {
          return r.ifElse(
            r.isNil,
            () => `"${capitalizeFirstLetter(temp[1])}" - Anonymous}`,
            () => {
              const source = r.trim(
                capitalizeFirstLetter(
                  temp[2]
                ).replace(/[^\w\s]/gi, '')
              );

              if (r.equals(r.toLower(source), 'me')) {
                return `"${capitalizeFirstLetter(temp[1])}" - Anonymous}`;
              }
              return `"${capitalizeFirstLetter(temp[1])}" - ${r.trim(capitalizeFirstLetter(temp[2]).replace(/[^\w\s]/gi, ''))}`;
            }
          )(temp[2]);
        }
      )(r.length(temp));
    } ],
    [ r.contains('”'), () => {
      const temp = r.split('”', detail);
      return r.ifElse(
        r.equals(0),
        () => {
          return r.ifElse(
            r.contains('“'),
            () => `"${capitalizeFirstLetter(temp[0]).substring(1)}" - Anonymous`,
            () => `"${capitalizeFirstLetter(temp[0])}" - Anonymous`,
          )(temp[0]);
        },
        () => {
          return r.ifElse(
            r.isNil,
            () => {
              return r.ifElse(
                r.contains('“'),
                () => `"${capitalizeFirstLetter(temp[0]).substring(1)}" - Anonymous`,
                () => `"${capitalizeFirstLetter(temp[0])}" - Anonymous`,
              )(temp[0]);
            },
            () => {
              const source = r.trim(temp[1].replace(/[^\w\s]/gi, ''));
              if (r.equals(r.toLower(source), 'me')) {
                return r.ifElse(
                  r.contains('“'),
                  () => `"${capitalizeFirstLetter(temp[0]).substring(1)}" - Anonymous`,
                  () => `"${capitalizeFirstLetter(temp[0])}" - Anonymous`,
                )(temp[0]);
              }
              return r.ifElse(
                r.contains('“'),
                () => `"${capitalizeFirstLetter(temp[0]).substring(1)}" - ${r.trim(temp[1].replace(/[^\w\s]/gi, ''))}`,
                () => `"${capitalizeFirstLetter(temp[0])}" - ${r.trim(temp[1].replace(/[^\w\s]/gi, ''))}`,
              )(temp[0]);
            }
          )(temp[2]);
        }
      // @ts-ignore
      )(r.length(temp[1]));
    } ],
    [ r.T, () => detail ],
  ])(detail);

};

export const normalizeQuotes = (quotesArray: string[]) => {
  const quotes = r.map((quote: string) => {
    return extractQuote(quote);
  })(quotesArray);

  return r.filter(r.contains('-'), quotes);
};