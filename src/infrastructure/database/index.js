import getInstance from './repositories/getInstance';
import composeAddToDb from './addToDatabase';
import composeGetAllFacts from './getAllFacts';
import composeAddUser from './addUser';
import composeMarkFactAsSeen from './markFactAsSeenByUser';
import composeAddToFavourites from './addToFavourties';
import composeGetUnseenFacts from './getUnseenFactsForUser';
import composeGetFavourites from './getFavourites';
import composeGetSeenFacts from './getSeenFacts';
import composeGetUser from './getUser';
import composeLogin from './login';
import composeGetFactById from './getFactById';
import composeRemoveFromFavourites from './removeFromFavourites';

import type { DatabaseConfig } from '../../core/contracts';

type Dependencies = {
  config: DatabaseConfig,
};

export default (dependencies: Dependencies) => {
  const client = getInstance(dependencies.config)();

  const addToDatabase = composeAddToDb(client);

  const getAllFacts = composeGetAllFacts(client);

  const addUser = composeAddUser(client);

  const markFactAsSeenByUser = composeMarkFactAsSeen(client);

  const addToFavourites = composeAddToFavourites(client);

  const getUnseenFacts = composeGetUnseenFacts(client);

  const getFavourites = composeGetFavourites(client);

  const getSeenFacts = composeGetSeenFacts(client);

  const getUser = composeGetUser(client);

  const login = composeLogin(client);

  const getFactById = composeGetFactById(client);

  const removeFromFavourites = composeRemoveFromFavourites(client);

  return {
    addToDatabase,
    getInstance,
    getAllFacts,
    addUser,
    markFactAsSeenByUser,
    addToFavourites,
    getUnseenFacts,
    getFavourites,
    getSeenFacts,
    getUser,
    login,
    getFactById,
    removeFromFavourites,
  };
};
