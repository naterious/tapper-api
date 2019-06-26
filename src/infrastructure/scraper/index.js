import composeScraper from './scrape';

import type { ScraperConfig } from '../../core/contracts';

type Dependencies = {
  config: ScraperConfig,
};

export default (dependencies: Dependencies) => {
  const scraper = composeScraper(dependencies.config);

  return {
    scraper,
  };
};
