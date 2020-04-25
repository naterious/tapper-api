import composeFactsScraper from './scraper';
import composeGetAllFacts from './getAllFacts';
import composeMarkFactAsSeen from './markFactAsSeen';
import composeAddFactToFavourites from './addFactToFavourites';
import composeGetUnseenFacts from './getUnseenFacts';
import composeGetFavouriteFacts from './getFavouriteFacts';
import composeGetSeenFacts from './getSeenFacts';
import composeGetFactById from './getFactById';
import composeRemoveFactFromFavourites from './removeFactFromFavourites';

import { IFactsDependencies } from './interfaces';

export default (dependencies: IFactsDependencies) => {
  const factsScraperMethod = composeFactsScraper(dependencies.factsScraperService);
  const getAllFactsMethod = composeGetAllFacts(dependencies.getAllService);
  const markFactAsSeenMethod = composeMarkFactAsSeen(dependencies.markAsSeenService);
  const addFactToFavouritesMethod = composeAddFactToFavourites(dependencies.addToFavouritesService);
  const getUnseenFactsMethod = composeGetUnseenFacts(dependencies.getUnseenService);
  const getFavouriteFactsMethod = composeGetFavouriteFacts(dependencies.getFavouritesService);
  const getSeenFactsMethod = composeGetSeenFacts(dependencies.getSeenService);
  const getFactByIdMethod = composeGetFactById(dependencies.getByIdService);
  const removeFactFromFavouritesMethod = composeRemoveFactFromFavourites(
    dependencies.removeFromFavouritesService,
  );

  return {
    factsScraperMethod,
    getAllFactsMethod,
    markFactAsSeenMethod,
    addFactToFavouritesMethod,
    getUnseenFactsMethod,
    getFavouriteFactsMethod,
    getSeenFactsMethod,
    getFactByIdMethod,
    removeFactFromFavouritesMethod,
  };
};