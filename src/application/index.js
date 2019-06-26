// @flow
import createScraper from './scraper';
import createGetAllFacts from './getAllFacts';
import createAddUser from './addUser';
import createMarkFactAsSeen from './markFactAsSeen';
import createAddToFavourites from './addToFavourites';
import createGetUnseenFacts from './getUnseenFacts';
import createGetFavourties from './getFavourites';
import createGetSeenFacts from './getSeenFacts';
import createLogin from './login';
import createGetFactById from './getFactById';
import createRemoveFromFavourites from './removeFromFavourites';

import type {
  Scraper,
  AddToDatabase,
  GetAllFacts,
  AddUser,
  MarkFactAsSeenByUser,
  AddToFavourites,
  GetUnseenFacts,
  GetFavourites,
  GetSeenFacts,
  Login,
  GetFactById,
  RemoveFromFavourites,
} from '../core/contracts';

type Dependencies = {
  scraper: Scraper,
  addToDatabase: AddToDatabase,
  getAllFacts: GetAllFacts,
  addUser: AddUser,
  markFactAsSeenByUser: MarkFactAsSeenByUser,
  addToFavourites: AddToFavourites,
  getUnseenFacts: GetUnseenFacts,
  getFavourites: GetFavourites,
  getSeenFacts: GetSeenfacts,
  login: Login,
  getFactById: GetFactById,
  removeFromFavourites: RemoveFromFavourites,
};

export default (dependencies: Dependencies) => {

  const scraperService = createScraper(
    dependencies.scraper,
    dependencies.addToDatabase,
    dependencies.getAllFacts,
  );

  const getAllFactsService = createGetAllFacts(
    dependencies.getAllFacts,
  );

  const addUserService = createAddUser(
    dependencies.addUser,
  );

  const markFactAsSeenService = createMarkFactAsSeen(
    dependencies.markFactAsSeenByUser,
  );

  const addToFavouritesService = createAddToFavourites(
    dependencies.addToFavourites,
  );

  const getUnseenFactsService = createGetUnseenFacts(
    dependencies.getUnseenFacts,
  );

  const getFavouritesService = createGetFavourties(
    dependencies.getFavourites,
  );

  const getSeenFactsService = createGetSeenFacts(
    dependencies.getSeenFacts,
  );

  const loginService = createLogin(
    dependencies.login,
  );

  const getFactByIdService = createGetFactById(
    dependencies.getFactById,
  );

  const removeFromFavouritesService = createRemoveFromFavourites(
    dependencies.removeFromFavourites,
  );

  return {
    scraperService,
    getAllFactsService,
    addUserService,
    markFactAsSeenService,
    addToFavouritesService,
    getUnseenFactsService,
    getFavouritesService,
    getSeenFactsService,
    loginService,
    getFactByIdService,
    removeFromFavouritesService,
  };
};