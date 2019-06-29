// @flow
import type { GetFavouriteFacts } from '../../core/contracts';
import type { Fluture } from 'fluture';

export type GetFavouriteFactsService = () => Fluture<*, any>;

export default (
  getFavouriteFacts: GetFavouriteFacts,
): GetFavouriteFactsService => (id) => {

  return getFavouriteFacts(id)
    .map((res) => {
      return res;
    });
};
