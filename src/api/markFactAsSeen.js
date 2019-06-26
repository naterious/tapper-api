// @flow
import type { $Response, $Request } from 'express';

import type { MarkFactAsSeenService } from '../application/markFactAsSeen';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../core/contracts';

export type MarkFactAsSeenMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  markFactAsSeenService: MarkFactAsSeenService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): MarkFactAsSeenMethod => (req: $Request, res: $Response) => {
  return markFactAsSeenService({
    userId: req.body.userId,
    factId: req.body.factId
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
