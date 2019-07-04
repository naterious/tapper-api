import { Response, Request } from 'express';

import { GetFactByIdService } from '../../application/facts/getFactById';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetFactByIdMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getFactByIdService: GetFactByIdService,
  // eslint-disable-next-line no-unused-vars
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetFactByIdMethod => (req, res) => {
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
