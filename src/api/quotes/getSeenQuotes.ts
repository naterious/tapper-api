import { GetSeenService } from '../../application/getSeen/getSeenService';
import { ApiMethod } from '../types';
import { EntityType } from '../../application/interfaces';

export default (
  getSeenQuotesService: GetSeenService,
): ApiMethod => async(req, res) => {
  try {
    const result = await getSeenQuotesService(req.params.id, EntityType.QUOTE);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};
