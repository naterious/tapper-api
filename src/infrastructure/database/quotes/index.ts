import composeAddToDb from './addQuotesToDatabase';
import composeGetAllQuotes from './getAllQuotes';
import composeAddQuoteToFavourites from './addToFavourites';
import composeGetQuoteById from './getQuoteById';
import composeGetFavouriteQuotes from './getFavouriteQuotes';
import composeGetUnseenQuotes from './getUnseenQuotes';
import composeMarkQuoteAsSeen from './markQuoteAsSeen';
import composeRemoveQuoteFromFavourites from './removeQuoteFromFavourites';
import composeGetSeenQuotes from './getSeenQuotes';

export default {
  composeAddToDb,
  composeGetAllQuotes,
  composeAddQuoteToFavourites,
  composeGetQuoteById,
  composeGetFavouriteQuotes,
  composeGetUnseenQuotes,
  composeMarkQuoteAsSeen,
  composeRemoveQuoteFromFavourites,
  composeGetSeenQuotes,
};