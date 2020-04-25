import { AddFactToFavourites, AddQuoteToFavourites } from '../../core/contracts';
import { AddToFavouritesParams } from './interfaces';
import { EntityType } from '../interfaces';

export type AddToFavouritesService = (
  params: AddToFavouritesParams,
) => Promise<any>;

export default (
  addFactToFavourites: AddFactToFavourites,
  addQuoteToFavourites: AddQuoteToFavourites,
): AddToFavouritesService => (params) => {
  if (params.type === EntityType.FACT) {
    return addFactToFavourites({
      factId: params.id,
      userId: params.userId,
    });
  }
  return addQuoteToFavourites({
    quoteId: params.id,
    userId: params.userId,
  });

};
