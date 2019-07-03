import { Response, Request } from 'express';

import { MarkFactAsSeenService } from '../../application/facts/markFactAsSeen';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type MarkFactAsSeenMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  markFactAsSeenService: MarkFactAsSeenService,
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): MarkFactAsSeenMethod => (req, res) => {
  return markFactAsSeenService({
    userId: req.body.userId,
    factId: req.body.factId,
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
