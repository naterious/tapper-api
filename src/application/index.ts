import composeScrapers from './scrapers';
import composeUsers from './users';
import composeGetAllService from './getAll';
import composeAddToFavouritesService from './addToFavourites';
import composeGetByIdService from './getById';
import composeGetFavouritesService from './getFavourites';
import composeGetSeenService from './getSeen';
import composeGetUnseenService from './getUnseen';
import composeMarkAsSeenService from './markAsSeen';
import composeRemoveFromFavouritesService from './removeFromFavourites';

import {IApplicationDependencies} from './interfaces';

export default (dependencies: IApplicationDependencies) => {
  const users = composeUsers(dependencies);

  const scrapers = composeScrapers(dependencies);

  const getAllService = composeGetAllService(
    dependencies.getAllFacts,
    dependencies.getAllQuotes,
  );

  const addToFavouritesService = composeAddToFavouritesService(
    dependencies.addFactToFavourites,
    dependencies.addQuoteToFavourites,
  );

  const getByIdService = composeGetByIdService(
    dependencies.getFactById,
    dependencies.getQuoteById,
  );

  const getFavouritesService = composeGetFavouritesService(
    dependencies.getFavouriteFacts,
    dependencies.getFavouriteQuotes,
  );

  const getSeenService = composeGetSeenService(
    dependencies.getSeenFacts,
    dependencies.getSeenQuotes,
  );

  const getUnseenService = composeGetUnseenService(
    dependencies.getUnseenFacts,
    dependencies.getUnseenQuotes,
  );

  const markAsSeenService = composeMarkAsSeenService(
    dependencies.markFactAsSeenByUser,
    dependencies.markQuoteAsSeenByUser,
  );

  const removeFromFavouritesService = composeRemoveFromFavouritesService(
    dependencies.removeFactFromFavourites,
    dependencies.removeQuoteFromFavourites,
  );

  return {
    getAllService,
    addToFavouritesService,
    getByIdService,
    getFavouritesService,
    getSeenService,
    getUnseenService,
    markAsSeenService,
    removeFromFavouritesService,

    ...users,

    ...scrapers,
  };
};