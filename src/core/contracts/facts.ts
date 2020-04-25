import { FutureInstance as Future } from 'fluture';

export type AddFactsToDatabase = (data: Array<Object>) => Future<any, any>;

export type GetAllFacts = () => Future<any, any>;

export type MarkFactAsSeenByUser = (details: {
  userId: string,
  factId: String,
}) => Future<any, any>;

export type AddFactToFavourites = (details: {
  userId: string,
  factId: String,
}) => Future<any, any>;

export type GetUnseenFacts = (id: string) => Future<any, any>;

export type GetFavouriteFacts = (id: string) => Future<any, any>;

export type GetSeenFacts = (id: string) => Future<any, any>;

export type GetFactById = (id: string) => Future<any, any>;

export type RemoveFactFromFavourites = (details: {
  userId: string,
  factId: string,
}) => Future<any, any>;