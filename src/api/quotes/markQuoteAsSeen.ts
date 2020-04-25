import { MarkAsSeenService } from '../../application/markAsSeen/markAsSeenService';
import { ApiMethod } from '../types';
import { EntityType } from '../../application/interfaces';

export default (
  markQuoteAsSeenService: MarkAsSeenService,
): ApiMethod => async (req, res) => {
  try {
    const result = await markQuoteAsSeenService({
      userId: req.body.userId,
      id: req.body.quoteId,
      type: EntityType.QUOTE
    });
    return res.status(200).send(result);
  }
  catch (err) {
    return res.status(500).send(err);
  }
};
