// @flow
import type { MarkQuoteAsSeenByUser } from '../../core/contracts';
import type { Fluture } from 'fluture';

export type MarkQuoteAsSeenService = ({
  userId: string,
  quoteId: string,
}) => Fluture<*, any>;

export default (
  markQuoteAsSeen: MarkQuoteAsSeenByUser,
): AddUserService => (details) => {
  return markQuoteAsSeen(details)
    .map((res) => {
      return res;
    });
};
