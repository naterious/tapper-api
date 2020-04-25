import { FutureInstance as Future } from 'fluture';
import { GetFavouriteQuotes } from '../../core/contracts';

export type GetFavouriteQuotesService = (id: string) => Future<any, any>;

export default (
  getFavouriteQuotes: GetFavouriteQuotes,
): GetFavouriteQuotesService => (id) => {

  return getFavouriteQuotes(id)
    .map((res) => {
      return res;
    });
};
