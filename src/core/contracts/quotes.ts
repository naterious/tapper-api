import { FutureInstance as Future } from 'fluture';

export type AddQuotesToDatabase = (data: Array<Object>) => Future<any, any>;

export type GetAllQuotes = () => Future<any, any>;

export type MarkQuoteAsSeenByUser = (details: {
  userId: string,
  quoteId: String,
}) => Future<any, any>;

export type AddQuoteToFavourites = (details: {
  userId: string,
  quoteId: String,
}) => Future<any, any>;

export type GetUnseenQuotes = (id: string) => Future<any, any>;

export type GetFavouriteQuotes = (id: string) => Future<any, any>;

export type GetSeenQuotes = (id: string) => Future<any, any>;

export type GetQuoteById = (id: string) => Future<any, any>;

export type RemoveQuoteFromFavourites = (details: {
  userId: string,
  quoteId: string,
}) => Future<any, any>;