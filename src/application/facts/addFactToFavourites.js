// @flow
import type { AddFactToFavourites } from '../../core/contracts';
import type { Fluture } from 'fluture';

export type MarkFactAsSeenService = ({
  userId: string,
  factId: string,
}) => Fluture<*, any>;

export default (
  addFactToFavourites: AddFactToFavourites,
): AddUserService => (details) => {
  return addFactToFavourites(details)
    .map((res) => {
      return res;
    });
};
