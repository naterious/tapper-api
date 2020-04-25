import { FutureInstance as Future } from 'fluture';

import { MarkQuoteAsSeenByUser } from '../../core/contracts';

export type MarkQuoteAsSeenService = (details: {
  userId: string,
  quoteId: string,
}) => Future<any, any>;

export default (
  markQuoteAsSeen: MarkQuoteAsSeenByUser,
): MarkQuoteAsSeenService => (details) => {
  return markQuoteAsSeen(details)
    .map((res) => {
      return res;
    });
};
