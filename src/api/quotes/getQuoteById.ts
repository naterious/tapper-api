import { Response, Request } from 'express';

import { GetQuoteByIdService } from '../../application/quotes/getQuoteById';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetQuoteByIdMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getQuoteByIdService: GetQuoteByIdService,
  // eslint-disable-next-line no-unused-vars
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetQuoteByIdMethod => (req, res) => {
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
