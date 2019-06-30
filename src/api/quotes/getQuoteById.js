// @flow
import type { $Response, $Request } from 'express';

import type { GetQuoteByIdService } from '../../application/quotes/getQuoteById';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetQuoteByIdMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getQuoteByIdService: GetQuoteByIdService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetQuoteByIdMethod => (req: $Request, res: $Response) => {
  return getQuoteByIdService(req.params.id)
    //.mapRej(defaultApiMethodErrorHandler)
    .promise()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
