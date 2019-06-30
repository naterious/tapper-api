// @flow
import type { $Response, $Request } from 'express';

import type { GetFavouriteQuotesService } from '../../application/quotes/getFavouriteQuotes';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetFavouriteQuotesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getFavouriteQuotesService: GetFavouriteQuotesService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetFavouriteQuotesMethod => (req: $Request, res: $Response) => {
  return getFavouriteQuotesService(req.params.id)
    //.mapRej(defaultApiMethodErrorHandler)
    .promise()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
