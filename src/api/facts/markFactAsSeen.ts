import { MarkAsSeenService } from '../../application/markAsSeen/markAsSeenService';
import { EntityType } from '../../application/interfaces';
import { ApiMethod } from '../types';

export default (
  markFactAsSeenService: MarkAsSeenService,
): ApiMethod => async (req, res) => {
  try {
    const result = await markFactAsSeenService({
      userId: req.body.userId,
      id: req.body.factId,
      type: EntityType.FACT,
    });
    return res.status(200).send(result);
  }
  catch (err) {
    return res.status(500).send(err);
  }
};
