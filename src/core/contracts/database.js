// @flow
import Fluture from 'fluture';

export type AddFactsToDatabase = (data: Array<Object>) => Fluture<any, any>;

export type GetAllFacts = () => Fluture<any, any>;

export type AddUser = (id: string) => Fluture<any, any>;

export type MarkFactAsSeenByUser = ({
  userId: string,
  factId: String,
}) => Fluture<any, any>;

export type AddFactToFavourites = ({
  userId: string,
  factId: String,
}) => Fluture<any, any>;

export type GetUnseenFacts = (id) => Fluture<any, any>;

export type GetFavouriteFacts = (id) => Fluture<any, any>;

export type GetSeenfacts = (id) => Fluture<any, any>;

export type GetFactById = (id) => Fluture<any, any>;