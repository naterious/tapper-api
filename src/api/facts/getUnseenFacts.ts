import { Response, Request } from 'express';

import { GetUnseenFactsService } from '../../application/facts/getUnseenFacts';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetUnseenFactsMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getUnseenFactsService: GetUnseenFactsService,
  // eslint-disable-next-line no-unused-vars
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetUnseenFactsMethod => (req, res) => {
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
