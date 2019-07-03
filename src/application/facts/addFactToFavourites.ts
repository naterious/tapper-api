import { FutureInstance as Future } from 'fluture';

import { AddFactToFavourites } from '../../core/contracts';

export type AddFactToFavouritesService = (details: {
  userId: string,
  factId: string,
}) => Future<any, any>;

export default (
  addFactToFavourites: AddFactToFavourites,
): AddFactToFavouritesService => (details) => {
  return addFactToFavourites(details)
    .map((res) => {
      return res;
    });
};
