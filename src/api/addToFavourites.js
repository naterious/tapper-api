// @flow
import type { $Response, $Request } from 'express';

import type { AddToFavouritesService } from '../application/addToFavourites';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../core/contracts';

export type AddToFavouritesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  addToFavouritesService: AddToFavouritesService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): AddToFavouritesMethod => (req: $Request, res: $Response) => {
  return addToFavouritesService({
    userId: req.body.userId,
    factId: req.body.factId
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
