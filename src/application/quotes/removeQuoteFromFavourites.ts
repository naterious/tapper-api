import { FutureInstance as Future } from 'fluture';

import { RemoveQuoteFromFavourites } from '../../core/contracts';

export type RemoveQuoteFromFavouritesService = (details: {
  userId: string,
  quoteId: string,
}) => Future<any, any>;

export default (
  removeQuoteFromFavourites: RemoveQuoteFromFavourites,
): RemoveQuoteFromFavouritesService => (details) => {
  return removeQuoteFromFavourites(details)
    .map((res) => {
      return res;
    });
};
