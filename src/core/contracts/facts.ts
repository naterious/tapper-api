export type AddFactsToDatabase = (data: Array<Object>) => Promise<number>;

export type GetAllFacts = () => Promise<string[]>;

export type MarkFactAsSeenByUser = (details: {
  userId: string,
  factId: String,
}) => Promise<string>;

export type AddFactToFavourites = (details: {
  userId: string,
  factId: String,
}) => Promise<string>;

export type GetUnseenFacts = (id: string) => Promise<{
  fact: string,
  id: string,
}[]>;

export type GetFavouriteFacts = (id: string) => Promise<{
  fact: string,
  id: string,
}[]>;

export type GetSeenFacts = (id: string) => Promise<{
  fact: string,
  id: string,
}[]>;

export type GetFactById = (id: string) => Promise<{
  fact: string,
  id: string,
}>;

export type RemoveFactFromFavourites = (details: {
  userId: string,
  factId: string,
}) => Promise<string>;