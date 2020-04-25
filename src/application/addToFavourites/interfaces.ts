import { EntityType } from '../interfaces';

export interface AddToFavouritesParams {
  userId: string,
  id: string,
  type: EntityType;
}