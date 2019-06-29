// @flow
import type { $Response, $Request } from 'express';

import type { AddFactToFavouritesService } from '../../application/facts/addFactToFavourites';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type AddFactToFavouritesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  addFactToFavouritesService: AddFactToFavouritesService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): AddFactToFavouritesMethod => (req: $Request, res: $Response) => {
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
