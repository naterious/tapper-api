export type AddQuotesToDatabase = (data: Array<Object>) => Promise<number>;

export type GetAllQuotes = () => Promise<string[]>;

export type MarkQuoteAsSeenByUser = (details: {
  userId: string,
  quoteId: String,
}) => Promise<string>;

export type AddQuoteToFavourites = (details: {
  userId: string,
  quoteId: String,
}) => Promise<any>;

export type GetUnseenQuotes = (id: string) => Promise<{quote: string, id: string}[]>;

export type GetFavouriteQuotes = (id: string) => Promise<{quote: string, id: string}[]>;

export type GetSeenQuotes = (id: string) => Promise<{quote: string, id: string}[]>;

export type GetQuoteById = (id: string) => Promise<{quote: string, id: string}>;

export type RemoveQuoteFromFavourites = (details: {
  userId: string,
  quoteId: string,
}) => Promise<string>;