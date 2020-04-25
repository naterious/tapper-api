import { MongoClient } from 'mongodb';

import composeAddToDb from './addFactsToDatabase';
import composeGetAllFacts from './getAllFacts';
import composeMarkFactAsSeen from './markFactAsSeenByUser';
import composeAddFactToFavourites from './addToFavourites';
import composeGetUnseenFacts from './getUnseenFactsForUser';
import composeGetFavouriteFacts from './getFavouriteFacts';
import composeGetSeenFacts from './getSeenFacts';
import composeGetFactById from './getFactById';
import composeRemoveFactFromFavourites from './removeFactFromFavourites';

export default (client: MongoClient) => {
  const addFactsToDatabase = composeAddToDb(client);
  const getAllFacts = composeGetAllFacts(client);
  const markFactAsSeenByUser = composeMarkFactAsSeen(client);
  const addFactToFavourites = composeAddFactToFavourites(client);
  const getUnseenFacts = composeGetUnseenFacts(client);
  const getFavouriteFacts = composeGetFavouriteFacts(client);
  const getSeenFacts = composeGetSeenFacts(client);
  const getFactById = composeGetFactById(client);
  const removeFactFromFavourites = composeRemoveFactFromFavourites(client);

  return {
    addFactsToDatabase,
    getAllFacts,
    markFactAsSeenByUser,
    addFactToFavourites,
    getUnseenFacts,
    getFavouriteFacts,
    getSeenFacts,
    getFactById,
    removeFactFromFavourites,
  };
};