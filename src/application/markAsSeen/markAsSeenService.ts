import { MarkFactAsSeenByUser, MarkQuoteAsSeenByUser } from '../../core/contracts';
import { MarkAsSeenParams } from './interfaces';
import { EntityType } from '../interfaces';

export type MarkAsSeenService = (
  params: MarkAsSeenParams,
) => Promise<any>;

export default (
  markFactAsSeen: MarkFactAsSeenByUser,
  markQuoteAsSeen: MarkQuoteAsSeenByUser,
): MarkAsSeenService => async (params) => {
  if (params.type === EntityType.FACT) {
    return await markFactAsSeen({
      factId: params.id,
      userId: params.userId,
    });
  } else {
    return await markQuoteAsSeen({
      quoteId: params.id,
      userId: params.userId,
    });
  }
};
