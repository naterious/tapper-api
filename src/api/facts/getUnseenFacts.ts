import { GetUnseenService } from '../../application/getUnseen/getUnseenService';
import { EntityType } from '../../application/interfaces';
import { ApiMethod } from '../types';

export default (
  getUnseenFactsService: GetUnseenService,
): ApiMethod => async(req, res) => {
  try {
    const result = await getUnseenFactsService(req.params.id, EntityType.FACT);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};
