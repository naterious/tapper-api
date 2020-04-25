import composeQuotesScraper from './scraper';
import composeGetAllQuotes from './getAllQuotes';
import composeMarkQuoteAsSeen from './markQuoteAsSeen';
import composeAddQuoteToFavourites from './addQuoteToFavourites';
import composeGetUnseenQuotes from './getUnseenQuotes';
import composeGetFavouriteQuotes from './getFavouriteQuotes';
import composeGetSeenQuotes from './getSeenQuotes';
import composeGetQuoteById from './getQuoteById';
import composeRemoveQuoteFromFavourites from './removeQuoteFromFavourites';

import { IQuotesDependencies } from './interfaces';

export default (dependencies: IQuotesDependencies) => {
  const quotesScraperMethod = composeQuotesScraper(dependencies.quotesScraperService);
  const getAllQuotesMethod = composeGetAllQuotes(dependencies.getAllService);
  const markQuoteAsSeenMethod = composeMarkQuoteAsSeen(dependencies.markAsSeenService);
  const getUnseenQuotesMethod = composeGetUnseenQuotes(dependencies.getUnseenService);
  const getFavouriteQuotesMethod = composeGetFavouriteQuotes(dependencies.getFavouritesService);
  const getSeenQuotesMethod = composeGetSeenQuotes(dependencies.getSeenService);
  const getQuoteByIdMethod = composeGetQuoteById(dependencies.getByIdService);
  const addQuoteToFavouritesMethod = composeAddQuoteToFavourites(
    dependencies.addToFavouritesService,
  );
  const removeQuoteFromFavouritesMethod = composeRemoveQuoteFromFavourites(
    dependencies.removeFromFavouritesService,
  );

  return {
    quotesScraperMethod,
    getAllQuotesMethod,
    markQuoteAsSeenMethod,
    addQuoteToFavouritesMethod,
    getUnseenQuotesMethod,
    getFavouriteQuotesMethod,
    getSeenQuotesMethod,
    getQuoteByIdMethod,
    removeQuoteFromFavouritesMethod,
  };
};