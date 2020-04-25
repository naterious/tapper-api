import { GetByIdService } from '../../application/getById/getByIdService';
import { EntityType } from '../../application/interfaces';
import { ApiMethod } from '../types';

export default (
  getFactByIdService: GetByIdService,
): ApiMethod => async (req, res) => {
  try {
    const result = await getFactByIdService(req.params.id, EntityType.FACT);
    return res.status(200).send(result);
  }
  catch (err) {
    return res.status(500).send(err);
  }
};
