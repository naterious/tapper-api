import { FutureInstance as Future } from 'fluture';

import { GetFavouriteFacts } from '../../core/contracts';

export type GetFavouriteFactsService = (id: string) => Future<any, any>;

export default (
  getFavouriteFacts: GetFavouriteFacts,
): GetFavouriteFactsService => (id) => {

  return getFavouriteFacts(id)
    .map((res) => {
      return res;
    });
};
