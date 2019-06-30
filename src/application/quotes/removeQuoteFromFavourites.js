// @flow
import type { RemoveQuoteFromFavourites } from '../../core/contracts';
import type { Fluture } from 'fluture';

export type RemoveQuoteFromFavouritesService = ({
  userId: string,
  quoteId: string,
}) => Fluture<*, any>;

export default (
  removeQuoteFromFavourites: RemoveQuoteFromFavourites,
): AddUserService => (details) => {
  return removeQuoteFromFavourites(details)
    .map((res) => {
      return res;
    });
};
