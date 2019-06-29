import composeAddToDb from './addFactsToDatabase';
import composeGetAllFacts from './getAllFacts';
import composeMarkFactAsSeen from './markFactAsSeenByUser';
import composeAddFactToFavourites from './addToFavourties';
import composeGetUnseenFacts from './getUnseenFactsForUser';
import composeGetFavouriteFacts from './getFavouriteFacts';
import composeGetSeenFacts from './getSeenFacts';
import composeGetFactById from './getFactById';
import composeRemoveFactFromFavourites from './removeFactFromFavourites';

export default {
  composeAddToDb,
  composeGetAllFacts,
  composeMarkFactAsSeen,
  composeAddFactToFavourites,
  composeGetUnseenFacts,
  composeGetFavouriteFacts,
  composeGetSeenFacts,
  composeGetFactById,
  composeRemoveFactFromFavourites,
};