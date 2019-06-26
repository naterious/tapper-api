// @flow
import type { Config } from './index';
import type { ScraperConfig } from '../../core/contracts';

export default (config: Config) => (): ScraperConfig => ({
  url: config.get('scraper.url'),
});