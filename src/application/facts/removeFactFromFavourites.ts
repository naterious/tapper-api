import { FutureInstance as Future } from 'fluture';

import { RemoveFactFromFavourites } from '../../core/contracts';

export type RemoveFactFromFavouritesService = (details: {
  userId: string,
  factId: string,
}) => Future<any, any>;

export default (
  removeFactFromFavourites: RemoveFactFromFavourites,
): RemoveFactFromFavouritesService => (details) => {
  return removeFactFromFavourites(details)
    .map((res) => {
      return res;
    });
};
