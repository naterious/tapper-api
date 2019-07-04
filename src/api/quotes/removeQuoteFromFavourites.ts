import { Response, Request } from 'express';

import { RemoveQuoteFromFavouritesService } from '../../application/quotes/removeQuoteFromFavourites';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type RemoveQuoteFromFavouritesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  removeQuoteFromFavouritesService: RemoveQuoteFromFavouritesService,
  // eslint-disable-next-line no-unused-vars
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): RemoveQuoteFromFavouritesMethod => (req, res) => {
  return removeQuoteFromFavouritesService({
    userId: req.body.userId,
    quoteId: req.body.quoteId,
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
