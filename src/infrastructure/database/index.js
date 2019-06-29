// @flow
import getInstance from './repositories/getInstance';

import fact from './facts';
import quote from './quotes';

import composeAddUser from './addUser';
import composeLogin from './login';

import type { DatabaseConfig } from '../../core/contracts';

type Dependencies = {
  config: DatabaseConfig,
};

export default (dependencies: Dependencies) => {
  const client = getInstance(dependencies.config)();

  const addFactsToDatabase = fact.composeAddToDb(client);

  const getAllFacts = fact.composeGetAllFacts(client);

  const markFactAsSeenByUser = fact.composeMarkFactAsSeen(client);

  const addFactToFavourites = fact.composeAddFactToFavourites(client);

  const getUnseenFacts = fact.composeGetUnseenFacts(client);

  const getFavouriteFacts = fact.composeGetFavouriteFacts(client);

  const getSeenFacts = fact.composeGetSeenFacts(client);

  const getFactById = fact.composeGetFactById(client);

  const removeFactFromFavourites = fact.composeRemoveFactFromFavourites(client);

  const addUser = composeAddUser(client);

  const login = composeLogin(client);

  const addQuotesToDatabase = quote.composeAddToDb(client);

  return {
    addFactsToDatabase,
    getInstance,
    getAllFacts,
    markFactAsSeenByUser,
    addFactToFavourites,
    getUnseenFacts,
    getFavouriteFacts,
    getSeenFacts,
    getFactById,
    removeFactFromFavourites,

    addQuotesToDatabase,

    addUser,
    login,
  };
};
