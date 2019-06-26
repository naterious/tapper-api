// @flow
import type { Config } from './index';
import type { SystemConfig } from '../../core/contracts';

export default (config: Config) => (): SystemConfig => ({
  environment: config.get('environment'),
});