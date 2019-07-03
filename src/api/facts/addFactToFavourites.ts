import { Response, Request } from 'express';

import { AddFactToFavouritesService } from '../../application/facts/addFactToFavourites';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type AddFactToFavouritesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  addFactToFavouritesService: AddFactToFavouritesService,
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): AddFactToFavouritesMethod => (req, res) => {
  return addFactToFavouritesService({
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
