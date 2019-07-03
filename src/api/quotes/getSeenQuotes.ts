import { Response, Request } from 'express';

import { GetSeenQuotesService } from '../../application/quotes/getSeenQuotes';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetSeenQuotesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getSeenQuotesService: GetSeenQuotesService,
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetSeenQuotesMethod => (req, res) => {
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
