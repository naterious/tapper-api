import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';

import passportConfig from './passport';

import { ExpressServer } from './express';
import { Router } from './router';
import {
  Logger, ServerConfig,
} from '../../core/contracts';

export default (
  createServer: ExpressServer,
  router: Router,
  serverConfig: ServerConfig,
  logger: Logger,
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
