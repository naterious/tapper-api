import { GetByIdService } from '../../application/getById/getByIdService';
import { ApiMethod } from '../types';
import { EntityType } from '../../application/interfaces';

export default (
  getQuoteByIdService: GetByIdService,
): ApiMethod => async (req, res) => {
  try {
    const result = await getQuoteByIdService(req.params.id, EntityType.QUOTE);
    return res.status(200).send(result);
  }
  catch (err) {
    return res.status(500).send(err);
  }
};
