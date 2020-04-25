import { EntityType } from "../interfaces";

export interface RemoveFromFavouritesParams {
  userId: string,
  id: string,
  type: EntityType;
}