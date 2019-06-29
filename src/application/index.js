// @flow
import fact from './facts';
import quote from './quotes';
import user from './users';

import type {
  FactsScraper,
  QuotesScraper,

  AddFactsToDatabase,
  GetAllFacts,
  MarkFactAsSeenByUser,
  AddFactToFavourites,
  GetUnseenFacts,
  GetFavouriteFacts,
  GetSeenFacts,
  GetFactById,
  RemoveFactFromFavourites,

  AddUser,
  Login,
} from '../core/contracts';

type Dependencies = {
  factsScraper: FactsScraper,
  quotesScraper: QuotesScraper,

  addFactsToDatabase: AddFactsToDatabase,
  getAllFacts: GetAllFacts,
  markFactAsSeenByUser: MarkFactAsSeenByUser,
  addFactToFavourites: AddFactToFavourites,
  getUnseenFacts: GetUnseenFacts,
  getFavouriteFacts: GetFavouriteFacts,
  getSeenFacts: GetSeenFacts,
  getFactById: GetFactById,
  removeFactFromFavourites: RemoveFactFromFavourites,

  addUser: AddUser,
  login: Login,
};

export default (dependencies: Dependencies) => {

  const factsScraperService = fact.createScraper(
    dependencies.factsScraper,
    dependencies.addFactsToDatabase,
    dependencies.getAllFacts,
  );

  const getAllFactsService = fact.createGetAllFacts(
    dependencies.getAllFacts,
  );

  const markFactAsSeenService = fact.createMarkFactAsSeen(
    dependencies.markFactAsSeenByUser,
  );

  const addFactToFavouritesService = fact.createAddFactToFavourites(
    dependencies.addFactToFavourites,
  );

  const getUnseenFactsService = fact.createGetUnseenFacts(
    dependencies.getUnseenFacts,
  );

  const getFavouriteFactsService = fact.createGetFavourties(
    dependencies.getFavouriteFacts,
  );

  const getSeenFactsService = fact.createGetSeenFacts(
    dependencies.getSeenFacts,
  );

  const getFactByIdService = fact.createGetFactById(
    dependencies.getFactById,
  );

  const removeFactFromFavouritesService = fact.createRemoveFactFromFavourites(
    dependencies.removeFactFromFavourites,
  );


  const addUserService = user.createAddUser(
    dependencies.addUser,
  );

  const loginService = user.createLogin(
    dependencies.login,
  );


  const quotesScraperService = quote.createScraper(
    dependencies.quotesScraper,
    dependencies.addQuotesToDatabase,
    dependencies.getAllQuotes,
  );

  return {
    factsScraperService,
    quotesScraperService,

    getAllFactsService,
    markFactAsSeenService,
    addFactToFavouritesService,
    getUnseenFactsService,
    getFavouriteFactsService,
    getSeenFactsService,
    getFactByIdService,
    removeFactFromFavouritesService,

    addUserService,
    loginService,
  };
};