import { Application } from 'express';

import { IServerDependencies } from './interfaces';

export type Router = (app: Application) => void;

// eslint-disable-next-line fp/no-nil
export default (methods: IServerDependencies): Router => (app: Application) => {
  app.get('/version', (req, res) => {
    return res.send('1.0.0');
  });

  app.get('/facts/scrape', methods.factsScraperMethod);
  app.get('/quotes/scrape', methods.quotesScraperMethod);

  app.get('/facts', methods.getAllFactsMethod);
  app.post('/facts/seen', methods.markFactAsSeenMethod);
  app.post('/facts/liked', methods.addFactToFavouritesMethod);
  app.get('/facts/:id/new', methods.getUnseenFactsMethod);
  app.get('/facts/:id/favourites', methods.getFavouriteFactsMethod);
  app.get('/facts/:id/seen', methods.getSeenFactsMethod);
  app.get('/facts/fact/:id', methods.getFactByIdMethod);
  app.delete('/facts/liked', methods.removeFactFromFavouritesMethod);

  app.get('/quotes', methods.getAllQuotesMethod);
  app.post('/quotes/seen', methods.markQuoteAsSeenMethod);
  app.post('/quotes/liked', methods.addQuoteToFavouritesMethod);
  app.get('/quotes/:id/new', methods.getUnseenQuotesMethod);
  app.get('/quotes/:id/favourites', methods.getFavouriteQuotesMethod);
  app.get('/quotes/:id/seen', methods.getSeenQuotesMethod);
  app.get('/quotes/quote/:id', methods.getQuoteByIdMethod);
  app.delete('/quotes/liked', methods.removeQuoteFromFavouritesMethod);

  app.post('/users/register', methods.registerMethod);
  app.post('/users/login', methods.loginMethod);
  app.post('/users', methods.registerMethod);
};