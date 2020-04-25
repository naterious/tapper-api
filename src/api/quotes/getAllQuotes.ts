import { GetAllService } from '../../application/getAll/getAllService';
import { EntityType } from '../../application/interfaces';
import { ApiMethod } from '../types';

export default (
  getAllQuotesService: GetAllService,
): ApiMethod => async (req, res) => {
  try {
    const result = await getAllQuotesService(EntityType.QUOTE);
    return res.status(200).send(result);
  }
  catch (err) {
    return res.status(500).send(err);
  }
};
