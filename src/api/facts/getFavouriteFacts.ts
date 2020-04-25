import { Response, Request } from 'express';

import { GetFavouriteFactsService } from '../../application/facts/getFavouriteFacts';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetFavouriteFactsMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getFavouriteFactsService: GetFavouriteFactsService,
  // eslint-disable-next-line no-unused-vars
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetFavouriteFactsMethod => (req, res) => {
  return getFavouriteFactsService(req.params.id)
    //.mapRej(defaultApiMethodErrorHandler)
    .promise()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
