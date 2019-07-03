import { Config } from './index';
import { ScraperConfig } from '../../core/contracts';

export default (config: Config) => (): ScraperConfig => ({
  url: config.get('scraper.url'),
});