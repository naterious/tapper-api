// @flow
export type {
  ServerConfig,
  SystemConfig,
  ScraperConfig,
  DatabaseConfig,
} from './config';

export type { Logger } from './logger';

export type {
  Scraper,
} from './scraper';

export type {
  AddToDatabase,
  GetAllFacts,
  AddUser,
  MarkFactAsSeenByUser,
  AddToFavourites,
  GetUnseenFacts,
  GetFavourites,
  GetSeenfacts,
  GetFactById,
} from './database';

export type ErrorWithCode = {
  message: string,
  code: Number,
  data: Object,
};