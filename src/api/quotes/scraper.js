// @flow
import type { $Response, $Request } from 'express';

import type { QuotesScraperService } from '../../application/quotes/scraper';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type QuotesScraperMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  quotesScraperService: QuotesScraperService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): QuotesScraperMethod => (req: $Request, res: $Response) => {
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
