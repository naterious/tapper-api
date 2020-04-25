import { RemoveFromFavouritesService } from '../../application/removeFromFavourites/removeFromFavouritesService';
import { ApiMethod } from '../types';
import { EntityType } from '../../application/interfaces';

export default (
  removeQuoteFromFavouritesService: RemoveFromFavouritesService,
): ApiMethod => async (req, res) => {
  try {
    const result = await removeQuoteFromFavouritesService({
      userId: req.body.userId,
      id: req.body.quoteId,
      type: EntityType.QUOTE
    });
    return res.status(200).send(result);
  }
  catch (err) {
    return res.status(500).send(err);
  }
};
