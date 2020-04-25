import { Response, Request } from 'express';

import { GetAllQuotesService } from '../../application/quotes/getAllQuotes';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetAllQuotesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getAllQuotesService: GetAllQuotesService,
  // eslint-disable-next-line no-unused-vars
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetAllQuotesMethod => (req, res) => {
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
