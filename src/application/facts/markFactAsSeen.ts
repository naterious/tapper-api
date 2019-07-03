import { FutureInstance as Future } from 'fluture';

import { MarkFactAsSeenByUser } from '../../core/contracts';

export type MarkFactAsSeenService = (details: {
  userId: string,
  factId: string,
}) => Future<any, any>;

export default (
  markFactAsSeen: MarkFactAsSeenByUser,
): MarkFactAsSeenService => (details) => {
  return markFactAsSeen(details)
    .map((res) => {
      return res;
    });
};
