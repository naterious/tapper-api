// @flow
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';
import express from 'express';
import passportStat from 'passport-local';

import passportConfig from './passport';
//import User from '../../core/models/user';

import type { ExpressServer } from './express';
import type { Router } from './router';
import type {
  Logger, ServerConfig, GetUser,
} from '../../core/contracts';
/* eslint-disable fp/no-nil */

export default (
  User,
  createServer: ExpressServer,
  router: Router,
  serverConfig: ServerConfig,
  logger: Logger,
  getUser: GetUser,
) => () => {
  const app = createServer();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors({ methods: [ 'POST', 'GET', 'DELETE' ]}));

  app.use(passport.initialize());
  passportConfig(passport);

  router(app);

  logger.info(`Server running at port ${serverConfig.port}`);
  return app.listen(serverConfig.port);
};
