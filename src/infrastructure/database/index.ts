import getInstance from './repositories/getInstance';

import composeFacts from './facts';
import composeQuotes from './quotes';

import composeUsers from './users';

import { DatabaseConfig } from '../../core/contracts';

type Dependencies = {
  config: DatabaseConfig,
};

export default (dependencies: Dependencies) => {
  const client = getInstance(dependencies.config)();

  const quotes = composeQuotes(client);
  const facts = composeFacts(client);
  const users = composeUsers(client);

  return {
    getInstance,

    ...quotes,
    ...facts,
    ...users,
  };
};
