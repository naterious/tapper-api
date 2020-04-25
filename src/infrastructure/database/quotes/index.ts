import { MongoClient } from 'mongodb';

import composeAddToDb from './addQuotesToDatabase';
import composeGetAllQuotes from './getAllQuotes';
import composeAddQuoteToFavourites from './addToFavourites';
import composeGetQuoteById from './getQuoteById';
import composeGetFavouriteQuotes from './getFavouriteQuotes';
import composeGetUnseenQuotes from './getUnseenQuotes';
import composeMarkQuoteAsSeen from './markQuoteAsSeen';
import composeRemoveQuoteFromFavourites from './removeQuoteFromFavourites';
import composeGetSeenQuotes from './getSeenQuotes';

export default (client: MongoClient) => {
  const addQuotesToDatabase = composeAddToDb(client);
  const getAllQuotes = composeGetAllQuotes(client);
  const addQuoteToFavourites = composeAddQuoteToFavourites(client);
  const getQuoteById = composeGetQuoteById(client);
  const getFavouriteQuotes = composeGetFavouriteQuotes(client);
  const getUnseenQuotes = composeGetUnseenQuotes(client);
  const markQuoteAsSeenByUser = composeMarkQuoteAsSeen(client);
  const removeQuoteFromFavourites = composeRemoveQuoteFromFavourites(client);
  const getSeenQuotes = composeGetSeenQuotes(client);

  return {
    addQuotesToDatabase,
    getAllQuotes,
    addQuoteToFavourites,
    getQuoteById,
    getFavouriteQuotes,
    getUnseenQuotes,
    markQuoteAsSeenByUser,
    removeQuoteFromFavourites,
    getSeenQuotes,
  }
};