//@flow
import { type Router as $Router, type $Application } from 'express';

import type { FactsScraperMethod } from '../facts/scraper';
import type { QuotesScraperMethod } from '../quotes/scraper';

import type { GetAllFactsMethod } from '../facts/getAllFacts';
import type { MarkFactAsSeenMethod } from '../facts/markFactAsSeen';
import type { AddFactToFavouritesMethod } from '../facts/addFactToFavourites';
import type { GetUnseenFactsMethod } from '../facts/getUnseenFacts';
import type { GetFavouriteFactsMethod } from '../facts/getFavouriteFacts';
import type { GetSeenFactsMethod } from '../facts/getSeenFacts';
import type { GetFactByIdMethod } from '../facts/getFactById';
import type { RemoveFactFromFavouritesMethod } from '../facts/removeFactFromFavourites';

import type { GetAllQuotesMethod } from '../quotes/getAllQuotes';
import type { MarkQuoteAsSeenMethod } from '../quotes/markQuoteAsSeen';
import type { AddQuoteToFavouritesMethod } from '../quotes/addQuoteToFavourites';
import type { GetUnseenQuotesMethod } from '../quotes/getUnseenQuotes';
import type { GetFavouriteQuotesMethod } from '../quotes/getFavouriteQuotes';
import type { GetSeenQuotesMethod } from '../quotes/getSeenQuotes';
import type { GetQuoteByIdMethod } from '../quotes/getQuoteById';
import type { RemoveQuoteFromFavouritesMethod } from '../quotes/removeQuoteFromFavourites';

import type { RegisterMethod } from '../users/register';
import type { LoginMethod } from '../users/login';

export type Router = (app: $Application) => $Router;

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

  addUser: AddUserMethod,
  register: RegisterMethod,
  login: LoginMethod,
};

// function fulfills Router type, returns void
// so doesn't need a return statement
/* eslint-disable fp/no-nil */
// $FlowFixMe
export default (methods: Methods): Router => (app: $Application) => {
  // $FlowFixMe
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
  app.post('/users', methods.addUser);
};