// @flow
import composeServer from './server';

import createScraper from './scraper';
import createGetAllFacts from './getAllFacts';
import createAddUser from './addUser';
import createMarkFactAsSeen from './markFactAsSeen';
import createAddToFavourites from './addToFavourites';
import createGetUnseenFacts from './getUnseenFacts';
import createGetFavourites from './getFavourites';
import createGetSeenFacts from './getSeenFacts';
import createGetFactById from './getFactById';
import createRemoveFromFavourites from './removeFromFavourites';

import createRegister from './register';
import validateRegisterInput from './validation/register';

import createLogin from './login';
import validateLoginInput from './validation/login';

//import { defaultApiMethodErrorHandler } from '../core/errors';

import type {
  Logger,
  ServerConfig,
  GetUser,
} from '../core/contracts';

import type { ScraperService } from '../application/scraper';
import type { GetAllFactsService } from '../application/getAllFacts';
import type { AddUserService } from '../application/addUser';
import type { MarkfactAsSeenService } from '../application/markFactAsSeen';
import type { AddToFavouritesService } from '../application/addToFavourites';
import type { GetUnseenFactsService } from '../application/getUnseenFacts';
import type { GetFavouritesService } from '../application/getFavourites';
import type { GetSeenFactsService } from '../application/getSeenFacts';
import type { LoginService } from '../application/login';
import type { GetFactByIdService } from '../application/getFactById';
import type { RemoveFromFavouritesService } from '../application/removeFromFavourites';

type Dependencies = {
  scraperService: ScraperService,
  serverConfig: ServerConfig,
  logger: Logger,
  getAllFactsService: GetAllFactsService,
  addUserService: AddUserService,
  markFactAsSeenService: MarkfactAsSeenService,
  addToFavouritesService: AddToFavouritesService,
  getUnseenFactsService: GetUnseenFactsService,
  getFavouritesService: GetFavouritesService,
  getSeenFactsService: GetSeenFactsService,
  getUser: GetUser,
  loginService: LoginService,
  getFactByIdService: GetFactByIdService,
  removeFromFavouritesService: RemoveFromFavouritesService,
};

export default (dependencies: Dependencies) => {

  // const partialDefaultApiMethodErrorHandler =
  //   defaultApiMethodErrorHandler(dependencies.logger);

  const scraper = createScraper(
    dependencies.scraperService,
    dependencies.logger,
    //partialDefaultApiMethodErrorHandler,
  );

  const getAllFacts = createGetAllFacts(
    dependencies.getAllFactsService,
  );

  const addUser = createAddUser(
    dependencies.addUserService,
  );

  const markFactAsSeen = createMarkFactAsSeen(
    dependencies.markFactAsSeenService,
  );

  const addToFavourites = createAddToFavourites(
    dependencies.addToFavouritesService,
  );

  const getUnseenFacts = createGetUnseenFacts(
    dependencies.getUnseenFactsService,
  );

  const getFavourites = createGetFavourites(
    dependencies.getFavouritesService,
  );

  const getSeenFacts = createGetSeenFacts(
    dependencies.getSeenFactsService,
  );

  const register = createRegister(
    validateRegisterInput,
    dependencies.addUserService,
  );

  const login = createLogin(
    validateLoginInput,
    dependencies.loginService,
  );

  const getFactById = createGetFactById(
    dependencies.getFactByIdService,
  );

  const removeFromFavourites = createRemoveFromFavourites(
    dependencies.removeFromFavouritesService,
  );

  const {
    server,
  } = composeServer({
    ...dependencies,

    scraper,
    serverConfig: dependencies.serverConfig,
    logger: dependencies.logger,
    getAllFacts,
    addUser,
    markFactAsSeen,
    addToFavourites,
    getUnseenFacts,
    getFavourites,
    getSeenFacts,
    register,
    login,
    getFactById,
    removeFromFavourites,
  });

  return {
    server,

    scraperMethod: scraper,
    getAllFactsMethod: getAllFacts,
    addUserMethod: addUser,
    markFactAsSeenMethod: markFactAsSeen,
    addToFavouritesMethod: addToFavourites,
    getUnseenFactsMethod: getUnseenFacts,
    getFavouritesMethod: getFavourites,
    getSeenFactsMethod: getSeenFacts,
    registerMethod: register,
    loginMethod: login,
    getFactByIdMethod: getFactById,
    removeFromFavouritesMethod: removeFromFavourites,
  };
};