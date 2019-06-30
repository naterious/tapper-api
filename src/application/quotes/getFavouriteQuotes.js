// @flow
import type { GetFavouriteQuotes } from '../../core/contracts';
import type { Fluture } from 'fluture';

export type GetFavouriteQuotesService = () => Fluture<*, any>;

export default (
  getFavouriteQuotes: GetFavouriteQuotes,
): GetFavouriteQuotesService => (id) => {

  return getFavouriteQuotes(id)
    .map((res) => {
      return res;
    });
};
