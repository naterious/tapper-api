import composeFactsScraperService from './factScraperService';
import composeQuotesScraperService from './quotesScraperService';
import { IScraperDependencies } from './interfaces';

export default (dependencies: IScraperDependencies) => {
  const factsScraperService = composeFactsScraperService(
    dependencies.factsScraper,
    dependencies.addFactsToDatabase,
    dependencies.getAllFacts,
  );

  const quotesScraperService = composeQuotesScraperService(
    dependencies.quotesScraper,
    dependencies.addQuotesToDatabase,
    dependencies.getAllQuotes,
  );

  return {
    factsScraperService,
    quotesScraperService,
  }
};