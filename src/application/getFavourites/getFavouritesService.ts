import { GetFavouriteFacts, GetFavouriteQuotes } from '../../core/contracts';
import { EntityType } from '../interfaces';

export type GetFavouritesService = (
  id: string,
  type: EntityType,
) => Promise<any>;

export default (
  getFavouriteFacts: GetFavouriteFacts,
  getFavouriteQuotes: GetFavouriteQuotes,
): GetFavouritesService => async (id, type) => {
  if (type === EntityType.FACT) {
    return await getFavouriteFacts(id);
  } else {
    return await getFavouriteQuotes(id);
  }
};
