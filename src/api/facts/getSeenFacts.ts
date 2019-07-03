import { Response, Request } from 'express';

import { GetSeenFactsService } from '../../application/facts/getSeenFacts';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetSeenFactsMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getSeenFactsService: GetSeenFactsService,
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetSeenFactsMethod => (req, res) => {
  return getSeenFactsService(req.params.id)
    //.mapRej(defaultApiMethodErrorHandler)
    .promise()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
