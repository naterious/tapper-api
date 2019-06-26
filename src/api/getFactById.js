// @flow
import type { $Response, $Request } from 'express';

import type { GetFactByIdService } from '../application/getFactById';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../core/contracts';

export type GetFactByIdMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getFactByIdService: GetFactByIdService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetFactByIdMethod => (req: $Request, res: $Response) => {
  return getFactByIdService(req.params.id)
    //.mapRej(defaultApiMethodErrorHandler)
    .promise()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
