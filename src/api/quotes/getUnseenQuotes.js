// @flow
import type { $Response, $Request } from 'express';

import type { GetUnseenQuotesService } from '../../application/quotes/getUnseenQuotes';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetUnseenQuotesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getUnseenQuotesService: GetUnseenQuotesService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetUnseenQuotesMethod => (req: $Request, res: $Response) => {
  return getUnseenQuotesService(req.params.id)
    //.mapRej(defaultApiMethodErrorHandler)
    .promise()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
