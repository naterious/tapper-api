import { GetUnseenService } from '../../application/getUnseen/getUnseenService';
import { ApiMethod } from '../types';
import { EntityType } from '../../application/interfaces';

export default (
  getUnseenQuotesService: GetUnseenService,
): ApiMethod => async (req, res) => {
  try {
    const result = await getUnseenQuotesService(req.params.id, EntityType.QUOTE);
    return res.status(200).send(result);
  }
  catch (err) {
    return res.status(500).send(err);
  }
};
