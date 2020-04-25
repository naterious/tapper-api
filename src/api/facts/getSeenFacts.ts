import { GetSeenService } from '../../application/getSeen/getSeenService';
import { EntityType } from '../../application/interfaces';
import { ApiMethod } from '../types';

export default (
  getSeenFactsService: GetSeenService,
): ApiMethod => async(req, res) => {
  try {
    const result = await getSeenFactsService(req.params.id, EntityType.FACT);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};
