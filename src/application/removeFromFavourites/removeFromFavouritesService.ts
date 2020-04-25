import { RemoveFactFromFavourites, RemoveQuoteFromFavourites } from '../../core/contracts';
import { RemoveFromFavouritesParams } from './interfaces';
import { EntityType } from '../interfaces';

export type RemoveFromFavouritesService = (
  params: RemoveFromFavouritesParams
) => Promise<any>;

export default (
  removeFactFromFavourites: RemoveFactFromFavourites,
  removeQuoteFromFavourites: RemoveQuoteFromFavourites,
): RemoveFromFavouritesService => async (params) => {
  if (params.type === EntityType.FACT) {
    return await removeFactFromFavourites({
      factId: params.id,
      userId: params.userId,
    });
  } else {
    return await removeQuoteFromFavourites({
      quoteId: params.id,
      userId: params.userId,
    });
  }
};
