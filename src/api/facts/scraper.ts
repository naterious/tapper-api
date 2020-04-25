import { FactsScraperService } from '../../application/scrapers/factScraperService';
import { ApiMethod } from '../types';

export default (
  factsScraperService: FactsScraperService,
): ApiMethod => async(req, res) => {
  try {
    const result = await factsScraperService();
    return res.status(200).send(`Added ${result} facts to db`);
  } catch (err) {
    return res.status(500).send(err);
  }
};
