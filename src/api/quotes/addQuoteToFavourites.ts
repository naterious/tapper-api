import { Response, Request } from 'express';

import { AddQuoteToFavouritesService } from '../../application/quotes/addQuoteToFavourites';
import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type AddQuoteToFavouritesMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  addQuoteToFavouritesService: AddQuoteToFavouritesService,
  // eslint-disable-next-line no-unused-vars
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): AddQuoteToFavouritesMethod => (req, res) => {
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
