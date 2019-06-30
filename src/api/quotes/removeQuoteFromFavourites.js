// @flow
import type { $Response, $Request } from 'express';

import type { RemoveQuoteFromFavouritesService } from '../../application/quotes/removeQuoteFromFavourites';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type RemoveQuoteFromFavouritesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  removeQuoteFromFavouritesService: RemoveQuoteFromFavouritesService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): RemoveQuoteFromFavouritesMethod => (req: $Request, res: $Response) => {
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
