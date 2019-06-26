// @flow
import type { $Response, $Request } from 'express';

import type { GetFavouritesService } from '../application/getFavourites';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../core/contracts';

export type GetFavouritesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getFavouritesService: GetFavouritesService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetFavouritesMethod => (req: $Request, res: $Response) => {
  return getFavouritesService(req.params.id)
    //.mapRej(defaultApiMethodErrorHandler)
    .promise()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
