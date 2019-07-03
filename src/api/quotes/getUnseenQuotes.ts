import { Response, Request } from 'express';

import { GetUnseenQuotesService } from '../../application/quotes/getUnseenQuotes';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetUnseenQuotesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getUnseenQuotesService: GetUnseenQuotesService,
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetUnseenQuotesMethod => (req, res) => {
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
