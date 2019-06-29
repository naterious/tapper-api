// @flow
import * as r from 'ramda';
import { ulid } from 'ulid';

import type { QuotesScraper, AddQuotesToDatabase, GetAllQuotes } from '../../core/contracts';
import type { Fluture } from 'fluture';

import { normalizeQuotes } from '../../domain/normalizeQuotes';

export type QuotesScraperService = () => Fluture<*, any>;

export default (
  quotesScraper: QuotesScraper,
  addQuotesToDatabase: AddQuotesToDatabase,
  getAllQuotes: GetAllQuotes,
): QuotesScraperService => () => {

  return quotesScraper()
    .chain((content) => {
      console.log(content)
      //return getAllQuotes()
        //.chain((storedQuotes) => {
          //const quotes = r.without(storedQuotes, normalizeQuotes(content));

          const quotes = normalizeQuotes(content);
          const data = r.map((quote) => {
            const quoteId = ulid();
            return {
              _id: quoteId,
              quote,
              id: quoteId,
            };
          })(quotes);

          return addQuotesToDatabase(data);
        })
    //})
    .map((res) => {
      return res;
    });
};
