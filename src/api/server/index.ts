import server from './server';
import expressServer from './express';
import router from './router';

import { FactsScraperMethod } from '../facts/scraper';
import { QuotesScraperMethod } from '../quotes/scraper';

import { GetAllFactsMethod } from '../facts/getAllFacts';
import { MarkFactAsSeenMethod } from '../facts/markFactAsSeen';
import { AddFactToFavouritesMethod } from '../facts/addFactToFavourites';
import { GetUnseenFactsMethod } from '../facts/getUnseenFacts';
import { GetFavouriteFactsMethod } from '../facts/getFavouriteFacts';
import { GetSeenFactsMethod } from '../facts/getSeenFacts';
import { GetFactByIdMethod } from '../facts/getFactById';
import { RemoveFactFromFavouritesMethod } from '../facts/removeFactFromFavourites';

import { GetAllQuotesMethod } from '../quotes/getAllQuotes';
import { MarkQuoteAsSeenMethod } from '../quotes/markQuoteAsSeen';
import { AddQuoteToFavouritesMethod } from '../quotes/addQuoteToFavourites';
import { GetUnseenQuotesMethod } from '../quotes/getUnseenQuotes';
import { GetFavouriteQuotesMethod } from '../quotes/getFavouriteQuotes';
import { GetSeenQuotesMethod } from '../quotes/getSeenQuotes';
import { GetQuoteByIdMethod } from '../quotes/getQuoteById';
import { RemoveQuoteFromFavouritesMethod } from '../quotes/removeQuoteFromFavourites';

import { RegisterMethod } from '../users/register';
import { LoginMethod } from '../users/login';

import {
  Logger, ServerConfig,
} from '../../core/contracts';

type Dependencies = {
  serverConfig: ServerConfig,
  logger: Logger,

  factsScraper: FactsScraperMethod,
  quotesScraper: QuotesScraperMethod,

  getAllFacts: GetAllFactsMethod,
  markFactAsSeen: MarkFactAsSeenMethod,
  addFactToFavourites: AddFactToFavouritesMethod,
  getUnseenFacts: GetUnseenFactsMethod,
  getFavouriteFacts: GetFavouriteFactsMethod,
  getSeenFacts: GetSeenFactsMethod,
  getFactById: GetFactByIdMethod,
  removeFactFromFavourites: RemoveFactFromFavouritesMethod,

  getAllQuotes: GetAllQuotesMethod,
  markQuoteAsSeen: MarkQuoteAsSeenMethod,
  addQuoteToFavourites: AddQuoteToFavouritesMethod,
  getUnseenQuotes: GetUnseenQuotesMethod,
  getFavouriteQuotes: GetFavouriteQuotesMethod,
  getSeenQuotes: GetSeenQuotesMethod,
  getQuoteById: GetQuoteByIdMethod,
  removeQuoteFromFavourites: RemoveQuoteFromFavouritesMethod,

  login: LoginMethod,
  register: RegisterMethod,
};

export default (dependencies: Dependencies) => {
  const partialRouter = router(dependencies);

  const partialServer = server(
    expressServer,
    partialRouter,
    dependencies.serverConfig,
    dependencies.logger,
  );

  return {
    server: partialServer,
  };
};