// @flow
import composeServer from './server';

import fact from './facts';
import quote from './quotes';
import user from './users';

//import { defaultApiMethodErrorHandler } from '../core/errors';

import type {
  Logger,
  ServerConfig,
} from '../core/contracts';

import type { FactsScraperService } from '../application/facts/scraper';
import type { QuotesScraperService } from '../application/quotes/scraper';

import type { GetAllFactsService } from '../application/facts/getAllFacts';
import type { MarkfactAsSeenService } from '../application/facts/markFactAsSeen';
import type { AddFactToFavouritesService } from '../application/facts/addFactToFavourites';
import type { GetUnseenFactsService } from '../application/facts/getUnseenFacts';
import type { GetFavouriteFactsService } from '../application/facts/getFavouriteFacts';
import type { GetSeenFactsService } from '../application/facts/getSeenFacts';
import type { GetFactByIdService } from '../application/facts/getFactById';
import type { RemoveFactFromFavouritesService } from '../application/facts/removeFactFromFavourites';

import type { LoginService } from '../application/users/login';
import type { AddUserService } from '../application/users/addUser';

type Dependencies = {
  serverConfig: ServerConfig,
  logger: Logger,

  factsScraperService: FactsScraperService,
  quotesScraperService: QuotesScraperService,

  getAllFactsService: GetAllFactsService,
  markFactAsSeenService: MarkfactAsSeenService,
  addFactToFavouritesService: AddFactToFavouritesService,
  getUnseenFactsService: GetUnseenFactsService,
  getFavouriteFactsService: GetFavouriteFactsService,
  getSeenFactsService: GetSeenFactsService,
  getFactByIdService: GetFactByIdService,
  removeFactFromFavouritesService: RemoveFactFromFavouritesService,

  addUserService: AddUserService,
  loginService: LoginService,
};

export default (dependencies: Dependencies) => {

  // const partialDefaultApiMethodErrorHandler =
  //   defaultApiMethodErrorHandler(dependencies.logger);

  const factsScraper = fact.createFactsScraper(
    dependencies.factsScraperService,
    dependencies.logger,
    //partialDefaultApiMethodErrorHandler,
  );

  const getAllFacts = fact.createGetAllFacts(
    dependencies.getAllFactsService,
  );

  const markFactAsSeen = fact.createMarkFactAsSeen(
    dependencies.markFactAsSeenService,
  );

  const addFactToFavourites = fact.createAddFactToFavourites(
    dependencies.addFactToFavouritesService,
  );

  const getUnseenFacts = fact.createGetUnseenFacts(
    dependencies.getUnseenFactsService,
  );

  const getFavouriteFacts = fact.createGetFavouriteFacts(
    dependencies.getFavouriteFactsService,
  );

  const getSeenFacts = fact.createGetSeenFacts(
    dependencies.getSeenFactsService,
  );

  const getFactById = fact.createGetFactById(
    dependencies.getFactByIdService,
  );

  const removeFactFromFavourites = fact.createRemoveFactFromFavourites(
    dependencies.removeFactFromFavouritesService,
  );


  const register = user.createRegister(
    user.validateRegisterInput,
    dependencies.addUserService,
  );

  const login = user.createLogin(
    user.validateLoginInput,
    dependencies.loginService,
  );


  const quotesScraper = quote.createQuotesScraper(
    dependencies.quotesScraperService,
    dependencies.logger,
    //partialDefaultApiMethodErrorHandler,
  );

  const {
    server,
  } = composeServer({
    ...dependencies,

    serverConfig: dependencies.serverConfig,
    logger: dependencies.logger,

    factsScraper,
    quotesScraper,

    getAllFacts,
    markFactAsSeen,
    addFactToFavourites,
    getUnseenFacts,
    getFavouriteFacts,
    getSeenFacts,
    getFactById,
    removeFactFromFavourites,

    register,
    login,
  });

  return {
    server,

    factsScraperMethod: factsScraper,
    quotesScraperMethod: quotesScraper,

    getAllFactsMethod: getAllFacts,
    markFactAsSeenMethod: markFactAsSeen,
    addFactToFavouritesMethod: addFactToFavourites,
    getUnseenFactsMethod: getUnseenFacts,
    getFavouriteFactsMethod: getFavouriteFacts,
    getSeenFactsMethod: getSeenFacts,
    getFactByIdMethod: getFactById,
    removeFactFromFavouritesMethod: removeFactFromFavourites,

    registerMethod: register,
    loginMethod: login,
  };
};