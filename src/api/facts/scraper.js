// @flow
import type { $Response, $Request } from 'express';

import type { FactsScraperService } from '../../application/facts/scraper';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type FactsScraperMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  factsScraperService: FactsScraperService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): FactsScraperMethod => (req: $Request, res: $Response) => {
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
