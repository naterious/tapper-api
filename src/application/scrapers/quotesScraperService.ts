import * as r from 'ramda';
import { ulid } from 'ulid';

import { QuotesScraper, AddQuotesToDatabase, GetAllQuotes } from '../../core/contracts';

import { normalizeQuotes } from '../../domain/normalizeQuotes';

export type QuotesScraperService = () => Promise<string | number>;

export default (
  quotesScraper: QuotesScraper,
  addQuotesToDatabase: AddQuotesToDatabase,
  getAllQuotes: GetAllQuotes,
): QuotesScraperService => async () => {
  const content = await quotesScraper();
  const storedQuotes = await getAllQuotes();

  const quotes = r.without(storedQuotes, normalizeQuotes(content));
  const data = r.map((quote) => {
    const quoteId = ulid();
    return {
      _id: quoteId,
      quote,
      id: quoteId,
    };
  })(quotes);

  return await addQuotesToDatabase(data);
};
