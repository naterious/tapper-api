// @flow
import server from './server';
import expressServer from './express';
import router from './router';

import User from '../../core/models/user';

import type { FactsScraperMethod } from '../facts/scraper';
import type { QuotesScraperMethod } from '../quotes/scraper';

import type { GetAllFactsMethod } from '../facts/getAllFacts';
import type { MarkFactAsSeenMethod } from '../facts/markFactAsSeen';
import type { AddFactToFavouritesMethod } from '../facts/addFactToFavourites';
import type { GetUnseenFactsMethod } from '../facts/getUnseenFacts';
import type { GetFavouriteFactsMethod } from '../facts/getFavouriteFacts';
import type { GetSeenFactsMethod } from '../facts/getSeenFacts';
import type { GetFactByIdMethod } from '../facts/getFactById';
import type { RemoveFactFromFavouritesMethod } from '../facts/removeFactFromFavourites';

import type { RegisterMethod } from '../users/register';
import type { LoginMethod } from '../users/login';

import type {
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

  addUser: AddUserMethod,
  login: LoginMethod,
  register: RegisterMethod,
};

export default (dependencies: Dependencies) => {
  const partialRouter = router(dependencies);

  const partialServer = server(
    User,
    expressServer,
    partialRouter,
    dependencies.serverConfig,
    dependencies.logger,
    dependencies.getUser,
  );

  return {
    server: partialServer,
  };
};