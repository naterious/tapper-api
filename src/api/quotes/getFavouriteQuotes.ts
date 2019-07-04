import { Response, Request } from 'express';

import { GetFavouriteQuotesService } from '../../application/quotes/getFavouriteQuotes';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type GetFavouriteQuotesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  getFavouriteQuotesService: GetFavouriteQuotesService,
  // eslint-disable-next-line no-unused-vars
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): GetFavouriteQuotesMethod => (req, res) => {
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
