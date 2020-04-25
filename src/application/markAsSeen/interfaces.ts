import { EntityType } from "../interfaces";

export interface MarkAsSeenParams {
  userId: string,
  id: string,
  type: EntityType;
}