// @flow
import * as r from 'ramda';

import type { RemoveFromFavourites } from '../core/contracts';
import type { Fluture } from 'fluture';

export type RemoveFromFavouritesService = ({
  userId: string,
  factId: string,
}) => Fluture<*, any>;

export default (
  removeFromFavourites: RemoveFromFavourites,
): AddUserService => (details) => {
  console.log('hello applll = ', details)
  return removeFromFavourites(details)
    .map((res) => {
      return res;
    });
};
