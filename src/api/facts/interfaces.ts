import { GetAllService } from '../../application/getAll/getAllService';
import { MarkAsSeenService } from '../../application/markAsSeen/markAsSeenService';
import { AddToFavouritesService } from '../../application/addToFavourites/addToFavouritesService';
import { GetUnseenService } from '../../application/getUnseen/getUnseenService';
import { GetFavouritesService } from '../../application/getFavourites/getFavouritesService';
import { GetSeenService } from '../../application/getSeen/getSeenService';
import { GetByIdService } from '../../application/getById/getByIdService';
import { RemoveFromFavouritesService } from '../../application/removeFromFavourites/removeFromFavouritesService';
import { FactsScraperService } from '../../application/scrapers/factScraperService';

export interface IFactsDependencies {
  getAllService: GetAllService;
  markAsSeenService: MarkAsSeenService;
  addToFavouritesService: AddToFavouritesService;
  getUnseenService: GetUnseenService;
  getFavouritesService: GetFavouritesService;
  getSeenService: GetSeenService;
  getByIdService: GetByIdService;
  removeFromFavouritesService: RemoveFromFavouritesService;
  factsScraperService: FactsScraperService,
}