// @flow
import type { RemoveFactFromFavourites } from '../../core/contracts';
import type { Fluture } from 'fluture';

export type RemoveFactFromFavouritesService = ({
  userId: string,
  factId: string,
}) => Fluture<*, any>;

export default (
  removeFactFromFavourites: RemoveFactFromFavourites,
): AddUserService => (details) => {
  return removeFactFromFavourites(details)
    .map((res) => {
      return res;
    });
};
