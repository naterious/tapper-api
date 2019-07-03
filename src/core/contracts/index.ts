export {
  ServerConfig,
  SystemConfig,
  ScraperConfig,
  DatabaseConfig,
} from './config';

export { Logger } from './logger';

export {
  FactsScraper,
  QuotesScraper,
} from './scraper';

export {
  AddFactsToDatabase,
  GetAllFacts,
  MarkFactAsSeenByUser,
  AddFactToFavourites,
  GetUnseenFacts,
  GetFavouriteFacts,
  GetSeenFacts,
  GetFactById,
  RemoveFactFromFavourites,
} from './facts';

export {
  Login,
  AddUser,
} from './auth';

export {
  AddQuotesToDatabase,
  GetAllQuotes,
  MarkQuoteAsSeenByUser,
  AddQuoteToFavourites,
  GetUnseenQuotes,
  GetFavouriteQuotes,
  GetSeenQuotes,
  GetQuoteById,
  RemoveQuoteFromFavourites,
} from './quotes';

export type ErrorWithCode = {
  message: string,
  code: Number,
  data: Object,
};