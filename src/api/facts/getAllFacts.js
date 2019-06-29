// @flow
import type { $Response, $Request } from 'express';

import type { GetAllFactsService } from '../../application/facts/getAllFacts';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetAllFactsMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getAllFactsService: GetAllFactsService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetAllFactsMethod => (req: $Request, res: $Response) => {
  return getAllFactsService()
    //.mapRej(defaultApiMethodErrorHandler)
    .promise()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
