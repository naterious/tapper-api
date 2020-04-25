import { AddToFavouritesService } from '../../application/addToFavourites/addToFavouritesService';
import { EntityType } from '../../application/interfaces';
import { ApiMethod } from '../types';

export default (
  addQuoteToFavouritesService: AddToFavouritesService,
): ApiMethod => async(req, res) => {
  try {
    const result = await addQuoteToFavouritesService({
      userId: req.body.userId,
      id: req.body.quoteId,
      type: EntityType.QUOTE,
    });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};
