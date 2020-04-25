import { ServerConfig, Logger } from '../core/contracts';
import { FactsScraperService } from '../application/scrapers/factScraperService';
import { QuotesScraperService } from '../application/scrapers/quotesScraperService';
import { GetAllService } from '../application/getAll/getAllService';
import { MarkAsSeenService } from '../application/markAsSeen/markAsSeenService';
import { AddToFavouritesService } from '../application/addToFavourites/addToFavouritesService';
import { GetUnseenService } from '../application/getUnseen/getUnseenService';
import { GetFavouritesService } from '../application/getFavourites/getFavouritesService';
import { GetSeenService } from '../application/getSeen/getSeenService';
import { GetByIdService } from '../application/getById/getByIdService';
import { RemoveFromFavouritesService } from '../application/removeFromFavourites/removeFromFavouritesService';
import { AddUserService } from '../application/users/addUser';
import { LoginService } from '../application/users/login';

export interface IApiDependencies {
  serverConfig: ServerConfig,
  logger: Logger,

  factsScraperService: FactsScraperService,
  quotesScraperService: QuotesScraperService,

  getAllService: GetAllService,
  markAsSeenService: MarkAsSeenService,
  addToFavouritesService: AddToFavouritesService,
  getUnseenService: GetUnseenService,
  getFavouritesService: GetFavouritesService,
  getSeenService: GetSeenService,
  getByIdService: GetByIdService,
  removeFromFavouritesService: RemoveFromFavouritesService,

  addUserService: AddUserService,
  loginService: LoginService,
}