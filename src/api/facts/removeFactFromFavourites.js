// @flow
import type { $Response, $Request } from 'express';

import type { RemoveFactFromFavouritesService } from '../../application/facts/removeFactFromFavourites';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type RemoveFactFromFavouritesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  removeFactFromFavouritesService: RemoveFactFromFavouritesService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): RemoveFactFromFavouritesMethod => (req: $Request, res: $Response) => {
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
