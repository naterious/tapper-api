import composeServer from './server';

import fact from './facts';
import quote from './quotes';
import user from './users';

//import { defaultApiMethodErrorHandler } from '../core/errors';

import {
  Logger,
  ServerConfig,
} from '../core/contracts';

import { FactsScraperService } from '../application/facts/scraper';
import { QuotesScraperService } from '../application/quotes/scraper';

import { GetAllFactsService } from '../application/facts/getAllFacts';
import { MarkFactAsSeenService } from '../application/facts/markFactAsSeen';
import { AddFactToFavouritesService } from '../application/facts/addFactToFavourites';
import { GetUnseenFactsService } from '../application/facts/getUnseenFacts';
import { GetFavouriteFactsService } from '../application/facts/getFavouriteFacts';
import { GetSeenFactsService } from '../application/facts/getSeenFacts';
import { GetFactByIdService } from '../application/facts/getFactById';
import { RemoveFactFromFavouritesService } from '../application/facts/removeFactFromFavourites';

import { GetAllQuotesService } from '../application/quotes/getAllQuotes';
import { MarkQuoteAsSeenService } from '../application/quotes/markQuoteAsSeen';
import { AddQuoteToFavouritesService } from '../application/quotes/addQuoteToFavourites';
import { GetUnseenQuotesService } from '../application/quotes/getUnseenQuotes';
import { GetFavouriteQuotesService } from '../application/quotes/getFavouriteQuotes';
import { GetSeenQuotesService } from '../application/quotes/getSeenQuotes';
import { GetQuoteByIdService } from '../application/quotes/getQuoteById';
import { RemoveQuoteFromFavouritesService } from '../application/quotes/removeQuoteFromFavourites';

import { LoginService } from '../application/users/login';
import { AddUserService } from '../application/users/addUser';

type Dependencies = {
  serverConfig: ServerConfig,
  logger: Logger,

  factsScraperService: FactsScraperService,
  quotesScraperService: QuotesScraperService,

  getAllFactsService: GetAllFactsService,
  markFactAsSeenService: MarkFactAsSeenService,
  addFactToFavouritesService: AddFactToFavouritesService,
  getUnseenFactsService: GetUnseenFactsService,
  getFavouriteFactsService: GetFavouriteFactsService,
  getSeenFactsService: GetSeenFactsService,
  getFactByIdService: GetFactByIdService,
  removeFactFromFavouritesService: RemoveFactFromFavouritesService,

  getAllQuotesService: GetAllQuotesService,
  markQuoteAsSeenService: MarkQuoteAsSeenService,
  addQuoteToFavouritesService: AddQuoteToFavouritesService,
  getUnseenQuotesService: GetUnseenQuotesService,
  getFavouriteQuotesService: GetFavouriteQuotesService,
  getSeenQuotesService: GetSeenQuotesService,
  getQuoteByIdService: GetQuoteByIdService,
  removeQuoteFromFavouritesService: RemoveQuoteFromFavouritesService,

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
    dependencies.logger,
  );

  const markFactAsSeen = fact.createMarkFactAsSeen(
    dependencies.markFactAsSeenService,
    dependencies.logger,
  );

  const addFactToFavourites = fact.createAddFactToFavourites(
    dependencies.addFactToFavouritesService,
    dependencies.logger,
  );

  const getUnseenFacts = fact.createGetUnseenFacts(
    dependencies.getUnseenFactsService,
    dependencies.logger,
  );

  const getFavouriteFacts = fact.createGetFavouriteFacts(
    dependencies.getFavouriteFactsService,
    dependencies.logger,
  );

  const getSeenFacts = fact.createGetSeenFacts(
    dependencies.getSeenFactsService,
    dependencies.logger,
  );

  const getFactById = fact.createGetFactById(
    dependencies.getFactByIdService,
    dependencies.logger,
  );

  const removeFactFromFavourites = fact.createRemoveFactFromFavourites(
    dependencies.removeFactFromFavouritesService,
    dependencies.logger,
  );

  const register = user.createRegister(
    user.validateRegisterInput,
    dependencies.addUserService,
    dependencies.logger,
  );

  const login = user.createLogin(
    user.validateLoginInput,
    dependencies.loginService,
    dependencies.logger,
  );

  const quotesScraper = quote.createQuotesScraper(
    dependencies.quotesScraperService,
    dependencies.logger,
    //partialDefaultApiMethodErrorHandler,
  );

  const getAllQuotes = quote.createGetAllQuotes(
    dependencies.getAllQuotesService,
    dependencies.logger,
  );

  const markQuoteAsSeen = quote.createMarkQuoteAsSeen(
    dependencies.markQuoteAsSeenService,
    dependencies.logger,
  );

  const addQuoteToFavourites = quote.createAddQuoteToFavourites(
    dependencies.addQuoteToFavouritesService,
    dependencies.logger,
  );

  const getUnseenQuotes = quote.createGetUnseenQuotes(
    dependencies.getUnseenQuotesService,
    dependencies.logger,
  );

  const getFavouriteQuotes = quote.createGetFavouriteQuotes(
    dependencies.getFavouriteQuotesService,
    dependencies.logger,
  );

  const getSeenQuotes = quote.createGetSeenQuotes(
    dependencies.getSeenQuotesService,
    dependencies.logger,
  );

  const getQuoteById = quote.createGetQuoteById(
    dependencies.getQuoteByIdService,
    dependencies.logger,
  );

  const removeQuoteFromFavourites = quote.createRemoveQuoteFromFavourites(
    dependencies.removeQuoteFromFavouritesService,
    dependencies.logger,
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

    getAllQuotes,
    markQuoteAsSeen,
    addQuoteToFavourites,
    getUnseenQuotes,
    getFavouriteQuotes,
    getSeenQuotes,
    getQuoteById,
    removeQuoteFromFavourites,

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

    getAllQuotesMethod: getAllQuotes,
    markQuoteAsSeenMethod: markQuoteAsSeen,
    addQuoteToFavouritesMethod: addQuoteToFavourites,
    getUnseenQuotesMethod: getUnseenQuotes,
    getFavouriteQuotesMethod: getFavouriteQuotes,
    getSeenQuotesMethod: getSeenQuotes,
    getQuoteByIdMethod: getQuoteById,
    removeQuoteFromFavouritesMethod: removeQuoteFromFavourites,

    registerMethod: register,
    loginMethod: login,
  };
};