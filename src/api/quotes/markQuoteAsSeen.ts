import { Response, Request } from 'express';

import { MarkQuoteAsSeenService } from '../../application/quotes/markQuoteAsSeen';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type MarkQuoteAsSeenMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  markQuoteAsSeenService: MarkQuoteAsSeenService,
  // eslint-disable-next-line no-unused-vars
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): MarkQuoteAsSeenMethod => (req, res) => {
  return markQuoteAsSeenService({
    userId: req.body.userId,
    quoteId: req.body.quoteId,
  })
    //.mapRej(defaultApiMethodErrorHandler)
    .promise()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
