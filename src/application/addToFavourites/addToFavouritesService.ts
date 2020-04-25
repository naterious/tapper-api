import { AddFactToFavourites, AddQuoteToFavourites } from '../../core/contracts';
import { AddToFavouritesParams } from './interfaces';
import { EntityType } from '../interfaces';

export type AddToFavouritesService = (
  params: AddToFavouritesParams,
) => Promise<any>;

export default (
  addFactToFavourites: AddFactToFavourites,
  addQuoteToFavourites: AddQuoteToFavourites,
): AddToFavouritesService => async (params) => {
  if (params.type === EntityType.FACT) {
    return await addFactToFavourites({
      factId: params.id,
      userId: params.userId,
    })
  } else {
    return await addQuoteToFavourites({
      quoteId: params.id,
      userId: params.userId,
    });
  }
};
