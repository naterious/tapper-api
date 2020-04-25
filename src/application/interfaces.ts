import {
  FactsScraper,
  QuotesScraper,

  AddFactsToDatabase,
  GetAllFacts,
  MarkFactAsSeenByUser,
  AddFactToFavourites,
  GetUnseenFacts,
  GetFavouriteFacts,
  GetSeenFacts,
  GetFactById,
  RemoveFactFromFavourites,

  GetAllQuotes,
  AddQuotesToDatabase,
  MarkQuoteAsSeenByUser,
  AddQuoteToFavourites,
  GetUnseenQuotes,
  GetFavouriteQuotes,
  GetSeenQuotes,
  GetQuoteById,
  RemoveQuoteFromFavourites,

  AddUser,
  Login,
} from '../core/contracts';

export interface IApplicationDependencies {
  factsScraper: FactsScraper;
  quotesScraper: QuotesScraper;

  addFactsToDatabase: AddFactsToDatabase;
  getAllFacts: GetAllFacts;
  markFactAsSeenByUser: MarkFactAsSeenByUser;
  addFactToFavourites: AddFactToFavourites;
  getUnseenFacts: GetUnseenFacts;
  getFavouriteFacts: GetFavouriteFacts;
  getSeenFacts: GetSeenFacts;
  getFactById: GetFactById;
  removeFactFromFavourites: RemoveFactFromFavourites;

  getAllQuotes: GetAllQuotes;
  addQuotesToDatabase: AddQuotesToDatabase;
  markQuoteAsSeenByUser: MarkQuoteAsSeenByUser;
  addQuoteToFavourites: AddQuoteToFavourites;
  getUnseenQuotes: GetUnseenQuotes;
  getFavouriteQuotes: GetFavouriteQuotes;
  getSeenQuotes: GetSeenQuotes;
  getQuoteById: GetQuoteById;
  removeQuoteFromFavourites: RemoveQuoteFromFavourites;

  addUser: AddUser;
  login: Login;
}

export enum EntityType {
  FACT = 'fact',
  QUOTE = 'quote',
}