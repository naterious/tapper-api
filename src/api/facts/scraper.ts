import { Response, Request } from 'express';

import { FactsScraperService } from '../../application/facts/scraper';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type FactsScraperMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  factsScraperService: FactsScraperService,
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): FactsScraperMethod => (req, res) => {
  return factsScraperService()
    //.mapRej(defaultApiMethodErrorHandler)
    .promise()
    .then((result) => {
      return res.status(200).send(`Added ${result} facts to db`);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
