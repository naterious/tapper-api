import { GetFavouriteFacts, GetFavouriteQuotes } from '../../core/contracts';
import { EntityType } from '../interfaces';

export type GetFavouritesService = (
  id: string,
  type: EntityType,
) => Promise<any>;

export default (
  getFavouriteFacts: GetFavouriteFacts,
  getFavouriteQuotes: GetFavouriteQuotes,
): GetFavouritesService => (id, type) => {
  if (type === EntityType.FACT) {
    return getFavouriteFacts(id);
  }
  return getFavouriteQuotes(id);

};
