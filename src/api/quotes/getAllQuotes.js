// @flow
import type { $Response, $Request } from 'express';

import type { GetAllQuotesService } from '../../application/quotes/getAllQuotes';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetAllQuotesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getAllQuotesService: GetAllQuotesService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetAllQuotesMethod => (req: $Request, res: $Response) => {
  return getAllQuotesService()
    //.mapRej(defaultApiMethodErrorHandler)
    .promise()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
