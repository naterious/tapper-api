import {
  FactsScraper,
  AddFactsToDatabase,
  GetAllFacts,
  QuotesScraper,
  AddQuotesToDatabase,
  GetAllQuotes,
} from '../../core/contracts';

export interface IScraperDependencies {
  factsScraper: FactsScraper;
  addFactsToDatabase: AddFactsToDatabase;
  getAllFacts: GetAllFacts;
  quotesScraper: QuotesScraper;
  addQuotesToDatabase: AddQuotesToDatabase;
  getAllQuotes: GetAllQuotes;
}