import { ApiMethod } from "../types";
import { Logger, ServerConfig } from "../../core/contracts";

export interface IServerDependencies {
  serverConfig: ServerConfig;
  logger: Logger;

  factsScraperMethod: ApiMethod;
  quotesScraperMethod: ApiMethod;

  getAllFactsMethod: ApiMethod;
  markFactAsSeenMethod: ApiMethod;
  addFactToFavouritesMethod: ApiMethod;
  getUnseenFactsMethod: ApiMethod;
  getFavouriteFactsMethod: ApiMethod;
  getSeenFactsMethod: ApiMethod;
  getFactByIdMethod: ApiMethod;
  removeFactFromFavouritesMethod: ApiMethod;

  getAllQuotesMethod: ApiMethod;
  markQuoteAsSeenMethod: ApiMethod;
  addQuoteToFavouritesMethod: ApiMethod;
  getUnseenQuotesMethod: ApiMethod;
  getFavouriteQuotesMethod: ApiMethod;
  getSeenQuotesMethod: ApiMethod;
  getQuoteByIdMethod: ApiMethod;
  removeQuoteFromFavouritesMethod: ApiMethod;

  loginMethod: ApiMethod;
  registerMethod: ApiMethod;
};