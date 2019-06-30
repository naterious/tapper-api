// @flow
import type { $Response, $Request } from 'express';

import type { AddQuoteToFavouritesService } from '../../application/quotes/addQuoteToFavourites';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type AddQuoteToFavouritesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  addQuoteToFavouritesService: AddQuoteToFavouritesService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): AddQuoteToFavouritesMethod => (req: $Request, res: $Response) => {
  return addQuoteToFavouritesService({
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
