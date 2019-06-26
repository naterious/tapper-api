//@flow
import passport from 'passport';

import User from '../../core/models/user';
import validateRegisterInput from '../validation/register';
import validateLoginInput from '../validation/login';

import { type Router as $Router, type $Application } from 'express';

import type { ScraperMethod } from '../scraper';
import type { GetAllFactsMethod } from '../getAllFacts';
import type { AddUserMethod } from '../addUser';
import type { MarkFactAsSeenMethod } from '../markFactAsSeen';
import type { AddToFavouritesMethod } from '../addToFavourites';
import type { GetUnseenFactsMethod } from '../getUnseenFacts';
import type { GetFavouritesMethod } from '../getUnseenFacts';
import type { GetSeenFactsMethod } from '../getSeenfacts';
import type { GetFactByIdMethod } from '../getFactById';
import type { RemoveFromFavouritesMethod } from '../removeFromFavourites';

import type { RegisterMethod } from '../register';
import type { LoginMethod } from '../login';

export type Router = (app: $Application) => $Router;

// const v = 1;

type Methods = {
  scraper: ScraperMethod,
  getAllFacts: GetAllFactsMethod,
  addUser: AddUserMethod,
  markFactAsSeen: MarkFactAsSeenMethod,
  addToFavourites: AddToFavouritesMethod,
  getUnseenFacts: GetUnseenFactsMethod,
  getFavourites: GetFavouritesMethod,
  getSeenFacts: GetSeenFactsMethod,
  register: RegisterMethod,
  login: LoginMethod,
  getFactById: GetFactByIdMethod,
  removeFromFavourites: RemoveFromFavouritesMethod,
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

  app.get('/scrape', methods.scraper);
  app.get('/facts', methods.getAllFacts);
  app.post('/users', methods.addUser);
  app.post('/facts/seen', methods.markFactAsSeen);
  app.post('/facts/liked', methods.addToFavourites);
  app.get('/facts/:id/new', methods.getUnseenFacts);
  app.get('/facts/:id/favourites', methods.getFavourites);
  app.get('/facts/:id/seen', methods.getSeenFacts);
  app.get('/facts/fact/:id', methods.getFactById);
  app.delete('/facts/liked', methods.removeFromFavourites);

  app.post('/users/register', methods.register);
  app.post('/users/login', methods.login);
};