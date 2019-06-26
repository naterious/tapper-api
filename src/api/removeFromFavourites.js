// @flow
import type { $Response, $Request } from 'express';

import type { RemoveFromFavouritesService } from '../application/removeFromFavourites';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../core/contracts';

export type RemoveFromFavouritesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  removeFromFavouritesService: RemoveFromFavouritesService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): RemoveFromFavouritesMethod => (req: $Request, res: $Response) => {
  console.log('hello api')
  return removeFromFavouritesService({
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
