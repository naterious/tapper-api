// @flow
import type { $Response, $Request } from 'express';

import type { GetSeenQuotesService } from '../../application/quotes/getSeenQuotes';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetSeenQuotesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getSeenQuotesService: GetSeenQuotesService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetSeenQuotesMethod => (req: $Request, res: $Response) => {
  return getSeenQuotesService(req.params.id)
    //.mapRej(defaultApiMethodErrorHandler)
    .promise()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
