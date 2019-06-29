// @flow
import type { $Response, $Request } from 'express';

import type { GetUnseenFactsService } from '../../application/facts/getUnseenFacts';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetUnseenFactsMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getUnseenFactsService: GetUnseenFactsService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetUnseenFactsMethod => (req: $Request, res: $Response) => {
  return getUnseenFactsService(req.params.id)
    //.mapRej(defaultApiMethodErrorHandler)
    .promise()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
