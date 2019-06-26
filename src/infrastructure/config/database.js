// @flow
import type { Config } from './index';
import type { DatabaseConfig } from '../../core/contracts';

export default (config: Config) => (): DatabaseConfig => ({
  url: config.get('database.url'),
  dbName: config.get('database.dbName'),
});