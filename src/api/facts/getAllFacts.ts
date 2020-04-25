import { GetAllService } from '../../application/getAll/getAllService';
import { EntityType } from '../../application/interfaces';
import { ApiMethod } from '../types';

export default (
  getAllFactsService: GetAllService,
): ApiMethod => async (req, res) => {
  try {
    const result = await getAllFactsService(EntityType.FACT);
    return res.status(200).send(result);
  }
  catch (err) {
    return res.status(500).send(err);
  }
};
