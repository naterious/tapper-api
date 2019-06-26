// @flow
import type { Config } from './index';
import type { ServerConfig } from '../../core/contracts';

export default (config: Config) => (): ServerConfig => ({
  port: config.get('application.port'),
});