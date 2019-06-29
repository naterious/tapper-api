// @flow
export type {
  ServerConfig,
  SystemConfig,
  ScraperConfig,
  DatabaseConfig,
} from './config';

export type { Logger } from './logger';

export type {
  FactsScraper,
  QuotesScraper,
} from './scraper';

export type {
  AddFactsToDatabase,
  GetAllFacts,
  AddUser,
  MarkFactAsSeenByUser,
  AddFactToFavourites,
  GetUnseenFacts,
  GetFavouriteFacts,
  GetSeenfacts,
  GetFactById,
} from './database';

export type ErrorWithCode = {
  message: string,
  code: Number,
  data: Object,
};