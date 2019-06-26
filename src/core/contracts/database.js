// @flow
import Fluture from 'fluture';

export type AddToDatabase = (data: Array<Object>) => Fluture<any, any>;

export type GetAllFacts = () => Fluture<any, any>;

export type AddUser = (id: string) => Fluture<any, any>;

export type MarkFactAsSeenByUser = ({
  userId: string,
  factId: String,
}) => Fluture<any, any>;

export type AddToFavourites = ({
  userId: string,
  factId: String,
}) => Fluture<any, any>;

export type GetUnseenFacts = (id) => Fluture<any, any>;

export type GetFavourites = (id) => Fluture<any, any>;

export type GetSeenfacts = (id) => Fluture<any, any>;

export type GetFactById = (id) => Fluture<any, any>;