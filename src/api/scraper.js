// @flow
import type { $Response, $Request } from 'express';

import type { ScraperService } from '../application/scraper';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../core/contracts';

export type ScraperMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  scraperService: ScraperService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): ScraperMethod => (req: $Request, res: $Response) => {
  return scraperService()
    //.mapRej(defaultApiMethodErrorHandler)
    .promise()
    .then((result) => {
      return res.status(200).send(`Added ${result} facts to db`);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
