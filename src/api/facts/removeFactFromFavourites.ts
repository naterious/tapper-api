import { Response, Request } from 'express';

import { RemoveFactFromFavouritesService } from '../../application/facts/removeFactFromFavourites';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type RemoveFactFromFavouritesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  removeFactFromFavouritesService: RemoveFactFromFavouritesService,
  // eslint-disable-next-line no-unused-vars
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): RemoveFactFromFavouritesMethod => (req, res) => {
  return removeFactFromFavouritesService({
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
