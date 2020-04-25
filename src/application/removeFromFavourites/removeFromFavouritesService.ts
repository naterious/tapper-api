import { RemoveFactFromFavourites, RemoveQuoteFromFavourites } from '../../core/contracts';
import { RemoveFromFavouritesParams } from './interfaces';
import { EntityType } from '../interfaces';

export type RemoveFromFavouritesService = (
  params: RemoveFromFavouritesParams
) => Promise<any>;

export default (
  removeFactFromFavourites: RemoveFactFromFavourites,
  removeQuoteFromFavourites: RemoveQuoteFromFavourites,
): RemoveFromFavouritesService => (params) => {
  if (params.type === EntityType.FACT) {
    return removeFactFromFavourites({
      factId: params.id,
      userId: params.userId,
    });
  }
  return removeQuoteFromFavourites({
    quoteId: params.id,
    userId: params.userId,
  });

};
