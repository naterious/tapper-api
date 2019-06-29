// @flow
import type { $Response, $Request } from 'express';

import type { GetFavouriteFactsService } from '../../application/facts/getFavouriteFacts';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetFavouriteFactsMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getFavouriteFactsService: GetFavouriteFactsService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetFavouriteFactsMethod => (req: $Request, res: $Response) => {
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
