import { GetFavouritesService } from '../../application/getFavourites/getFavouritesService';
import { EntityType } from '../../application/interfaces';
import { ApiMethod } from '../types';

export default (
  getFavouriteFactsService: GetFavouritesService,
): ApiMethod => async(req, res) => {
  try {
    const result = await getFavouriteFactsService(
      req.params.id,
      EntityType.FACT,
    );
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};
