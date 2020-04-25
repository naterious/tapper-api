import { Response, Request } from 'express';

import { GetAllFactsService } from '../../application/facts/getAllFacts';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetAllFactsMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getAllFactsService: GetAllFactsService,
  // eslint-disable-next-line no-unused-vars
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetAllFactsMethod => (req, res) => {
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
