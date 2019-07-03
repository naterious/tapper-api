import composeConfig from './config';
import logger from './logger';
import composeScraper from './scraper';
import composeDatabase from './database';

export default () => {
  const config = composeConfig();
  const factsScraper = composeScraper({
    config: config.getScraperConfig(),
  });
  const database = composeDatabase({
    config: config.getDatabaseConfig(),
  });

  return {
    serverConfig: config.getServerConfig(),
    systemConfig: config.getSystemConfig(),
    databaseConfig: config.getDatabaseConfig(),

    logger,
    ...factsScraper,
    ...database,
  };
};
