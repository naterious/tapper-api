import server from './server';
import expressServer from './express';
import router from './router';

import { IServerDependencies } from './interfaces';

export default (dependencies: IServerDependencies) => {
  const partialRouter = router(dependencies);

  const partialServer = server(
    expressServer,
    partialRouter,
    dependencies.serverConfig,
    dependencies.logger,
  );

  return {
    server: partialServer,
  };
};