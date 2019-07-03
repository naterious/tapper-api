import { Response, Request } from 'express';

import { QuotesScraperService } from '../../application/quotes/scraper';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type QuotesScraperMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  quotesScraperService: QuotesScraperService,
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): QuotesScraperMethod => (req, res) => {
  return quotesScraperService()
    //.mapRej(defaultApiMethodErrorHandler)
    .promise()
    .then((result) => {
      return res.status(200).send(`Added ${result} quotes to db`);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
