// @flow
import type { $Response, $Request } from 'express';

import type { GetSeenFactsService } from '../../application/facts/getSeenFacts';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetSeenFactsMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getSeenFactsService: GetSeenFactsService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetSeenFactsMethod => (req: $Request, res: $Response) => {
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
