// @flow
import config from 'config';
import server from './server';
import system from './system';
import scraper from './scraper';
import database from './database';

import type {
  ServerConfig,
  SystemConfig,
  ScraperConfig,
  DatabaseConfig,
} from '../../core/contracts';

export type Config = {
  get: (key: string) => *,
};

export type InfrastructureConfig = {
  getServerConfig: () => ServerConfig,
  getSystemConfig: () => SystemConfig,
  getScraperConfig: () => ScraperConfig,
  getDatabaseConfig: () => DatabaseConfig,
};

export default (): InfrastructureConfig => {
  const getServerConfig = server(config);
  const getSystemConfig = system(config);
  const getScraperConfig = scraper(config);
  const getDatabaseConfig = database(config);

  return {
    getServerConfig,
    getSystemConfig,
    getScraperConfig,
    getDatabaseConfig,
  };
};
