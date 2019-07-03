import { Config } from './index';
import { DatabaseConfig } from '../../core/contracts';

export default (config: Config) => (): DatabaseConfig => ({
  url: config.get('database.url'),
  dbName: config.get('database.dbName'),
});