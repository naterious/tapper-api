// @flow
import * as r from 'ramda';

import type { GetFavourites } from '../core/contracts';
import type { Fluture } from 'fluture';

export type GetFavouritesService = () => Fluture<*, any>;

export default (
  getFavourites: GetFavourites,
): GetFavouritesService => (id) => {

  return getFavourites(id)
    .map((res) => {
      return res;
    });
};
