// @flow
import type { $Response, $Request } from 'express';

import type { MarkQuoteAsSeenService } from '../../application/quotes/markQuoteAsSeen';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type MarkQuoteAsSeenMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  markQuoteAsSeenService: MarkQuoteAsSeenService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): MarkQuoteAsSeenMethod => (req: $Request, res: $Response) => {
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
