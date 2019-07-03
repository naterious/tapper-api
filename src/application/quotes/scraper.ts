import * as r from 'ramda';
import { ulid } from 'ulid';
import { FutureInstance as Future } from 'fluture';

import { QuotesScraper, AddQuotesToDatabase, GetAllQuotes } from '../../core/contracts';

import { normalizeQuotes } from '../../domain/normalizeQuotes';

export type QuotesScraperService = () => Future<any, any>;

export default (
  quotesScraper: QuotesScraper,
  addQuotesToDatabase: AddQuotesToDatabase,
  getAllQuotes: GetAllQuotes,
): QuotesScraperService => () => {

  return quotesScraper()
    .chain((content) => {
      return getAllQuotes()
        .chain((storedQuotes) => {
          const quotes = r.without(storedQuotes, normalizeQuotes(content));

          const data = r.map((quote) => {
            const quoteId = ulid();
            return {
              _id: quoteId,
              quote,
              id: quoteId,
            };
          })(quotes);

          return addQuotesToDatabase(data);
        });
    })
    .map((res) => {
      return res;
    });
};
