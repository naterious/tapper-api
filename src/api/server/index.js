// @flow
import server from './server';
import expressServer from './express';
import router from './router';

import User from '../../core/models/user';

import type { ScraperMethod } from '../scraper';
import type { GetAllFactsMethod } from '../getAllFacts';
import type { AddUserMethod } from '../addUser';
import type { MarkFactAsSeenMethod } from '../markFactAsSeen';
import type { AddToFavouritesMethod } from '../addToFavourites';
import type { GetUnseenFactsMethod } from '../getUnseenFacts';
import type { GetFavouritesMethod } from '../getUnseenFacts';
import type { GetSeenFactsMethod } from '../getSeenfacts';
import type { GetFactByIdMethod } from '../getFactById';
import type { RemoveFromFavouritesMethod } from '../removeFromFavourites';

import type { RegisterMethod } from '../register';
import type { LoginMethod } from '../login';

import type {
  Logger, ServerConfig, GetUser,
} from '../../core/contracts';

type Dependencies = {
  scraper: ScraperMethod,
  serverConfig: ServerConfig,
  logger: Logger,
  getAllFacts: GetAllFactsMethod,
  addUser: AddUserMethod,
  markFactAsSeen: MarkFactAsSeenMethod,
  addToFavourites: AddToFavouritesMethod,
  getUnseenFacts: GetUnseenFactsMethod,
  getFavourites: GetFavouritesMethod,
  getSeenFacts: GetSeenFactsMethod,
  getUser: GetUser,
  register: RegisterMethod,
  login: LoginMethod,
  getFactById: GetFactByIdMethod,
  removeFromFavourites: RemoveFromFavouritesMethod,
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