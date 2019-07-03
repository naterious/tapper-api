import composeFactScraper from './factsScraper';
import composeQuoteScraper from './quotesScraper';

import { ScraperConfig } from '../../core/contracts';

type Dependencies = {
  config: ScraperConfig,
};

export default (dependencies: Dependencies) => {
  const factsScraper = composeFactScraper(dependencies.config);
  const quotesScraper = composeQuoteScraper(dependencies.config);

  return {
    factsScraper,
    quotesScraper,
  };
};
