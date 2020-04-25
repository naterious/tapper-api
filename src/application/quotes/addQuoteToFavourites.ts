import { FutureInstance as Future } from 'fluture';

import { AddQuoteToFavourites } from '../../core/contracts';

export type AddQuoteToFavouritesService = (details: {
  userId: string,
  quoteId: string,
}) => Future<any, any>;

export default (
  addQuoteToFavourites: AddQuoteToFavourites,
): AddQuoteToFavouritesService => (details) => {
  return addQuoteToFavourites(details)
    .map((res) => {
      return res;
    });
};
