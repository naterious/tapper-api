import composeServer from './server';

import composeFacts from './facts';
import composeQuotes from './quotes';
import composeUsers from './users';

import { IApiDependencies } from './interfaces';

export default (dependencies: IApiDependencies) => {
  const facts = composeFacts(dependencies);
  const quotes = composeQuotes(dependencies);
  const users = composeUsers(dependencies);

  const {
    server,
  } = composeServer({
    ...dependencies,

    serverConfig: dependencies.serverConfig,
    logger: dependencies.logger,

    ...facts,
    ...quotes,
    ...users,
  });

  return {
    server,
    ...facts,
    ...quotes,
    ...users,
  };
};