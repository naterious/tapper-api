// @flow
import * as r from 'ramda';

import type { MarkFactAsSeenByUser } from '../core/contracts';
import type { Fluture } from 'fluture';

export type MarkFactAsSeenService = ({
  userId: string,
  factId: string,
}) => Fluture<*, any>;

export default (
  markFactAsSeen: MarkFactAsSeenByUser,
): AddUserService => (details) => {
  return markFactAsSeen(details)
    .map((res) => {
      return res;
    });
};
