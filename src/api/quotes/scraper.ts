import { QuotesScraperService } from '../../application/scrapers/quotesScraperService';
import { ApiMethod } from '../types';

export default (
  quotesScraperService: QuotesScraperService,
): ApiMethod => async (req, res) => {
  try {
    const result_1 = await quotesScraperService();
    return res.status(200).send(`Added ${result_1} quotes to db`);
  }
  catch (err) {
    return res.status(500).send(err);
  }
};
