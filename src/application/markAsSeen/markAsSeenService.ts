import { MarkFactAsSeenByUser, MarkQuoteAsSeenByUser } from '../../core/contracts';
import { MarkAsSeenParams } from './interfaces';
import { EntityType } from '../interfaces';

export type MarkAsSeenService = (
  params: MarkAsSeenParams,
) => Promise<any>;

export default (
  markFactAsSeen: MarkFactAsSeenByUser,
  markQuoteAsSeen: MarkQuoteAsSeenByUser,
): MarkAsSeenService => (params) => {
  if (params.type === EntityType.FACT) {
    return markFactAsSeen({
      factId: params.id,
      userId: params.userId,
    });
  }
  return markQuoteAsSeen({
    quoteId: params.id,
    userId: params.userId,
  });

};
