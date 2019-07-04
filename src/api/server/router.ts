import { Application } from 'express';

import { FactsScraperMethod } from '../facts/scraper';
import { QuotesScraperMethod } from '../quotes/scraper';

import { GetAllFactsMethod } from '../facts/getAllFacts';
import { MarkFactAsSeenMethod } from '../facts/markFactAsSeen';
import { AddFactToFavouritesMethod } from '../facts/addFactToFavourites';
import { GetUnseenFactsMethod } from '../facts/getUnseenFacts';
import { GetFavouriteFactsMethod } from '../facts/getFavouriteFacts';
import { GetSeenFactsMethod } from '../facts/getSeenFacts';
import { GetFactByIdMethod } from '../facts/getFactById';
import { RemoveFactFromFavouritesMethod } from '../facts/removeFactFromFavourites';

import { GetAllQuotesMethod } from '../quotes/getAllQuotes';
import { MarkQuoteAsSeenMethod } from '../quotes/markQuoteAsSeen';
import { AddQuoteToFavouritesMethod } from '../quotes/addQuoteToFavourites';
import { GetUnseenQuotesMethod } from '../quotes/getUnseenQuotes';
import { GetFavouriteQuotesMethod } from '../quotes/getFavouriteQuotes';
import { GetSeenQuotesMethod } from '../quotes/getSeenQuotes';
import { GetQuoteByIdMethod } from '../quotes/getQuoteById';
import { RemoveQuoteFromFavouritesMethod } from '../quotes/removeQuoteFromFavourites';

import { RegisterMethod } from '../users/register';
import { LoginMethod } from '../users/login';

export type Router = (app: Application) => void;

// const v = 1;

type Methods = {
  factsScraper: FactsScraperMethod,
  quotesScraper: QuotesScraperMethod,

  getAllFacts: GetAllFactsMethod,
  markFactAsSeen: MarkFactAsSeenMethod,
  addFactToFavourites: AddFactToFavouritesMethod,
  getUnseenFacts: GetUnseenFactsMethod,
  getFavouriteFacts: GetFavouriteFactsMethod,
  getSeenFacts: GetSeenFactsMethod,
  getFactById: GetFactByIdMethod,
  removeFactFromFavourites: RemoveFactFromFavouritesMethod,

  getAllQuotes: GetAllQuotesMethod,
  markQuoteAsSeen: MarkQuoteAsSeenMethod,
  addQuoteToFavourites: AddQuoteToFavouritesMethod,
  getUnseenQuotes: GetUnseenQuotesMethod,
  getFavouriteQuotes: GetFavouriteQuotesMethod,
  getSeenQuotes: GetSeenQuotesMethod,
  getQuoteById: GetQuoteByIdMethod,
  removeQuoteFromFavourites: RemoveQuoteFromFavouritesMethod,

  register: RegisterMethod,
  login: LoginMethod,
};

// eslint-disable-next-line fp/no-nil
export default (methods: Methods): Router => (app: Application) => {
  app.get('/version', (req, res) => {
    return res.send('1.0.0');
  });

  app.get('/facts/scrape', methods.factsScraper);
  app.get('/quotes/scrape', methods.quotesScraper);

  app.get('/facts', methods.getAllFacts);
  app.post('/facts/seen', methods.markFactAsSeen);
  app.post('/facts/liked', methods.addFactToFavourites);
  app.get('/facts/:id/new', methods.getUnseenFacts);
  app.get('/facts/:id/favourites', methods.getFavouriteFacts);
  app.get('/facts/:id/seen', methods.getSeenFacts);
  app.get('/facts/fact/:id', methods.getFactById);
  app.delete('/facts/liked', methods.removeFactFromFavourites);

  app.get('/quotes', methods.getAllQuotes);
  app.post('/quotes/seen', methods.markQuoteAsSeen);
  app.post('/quotes/liked', methods.addQuoteToFavourites);
  app.get('/quotes/:id/new', methods.getUnseenQuotes);
  app.get('/quotes/:id/favourites', methods.getFavouriteQuotes);
  app.get('/quotes/:id/seen', methods.getSeenQuotes);
  app.get('/quotes/quote/:id', methods.getQuoteById);
  app.delete('/quotes/liked', methods.removeQuoteFromFavourites);

  app.post('/users/register', methods.register);
  app.post('/users/login', methods.login);
  app.post('/users', methods.register);
};