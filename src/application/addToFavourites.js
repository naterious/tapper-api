// @flow
import * as r from 'ramda';

import type { AddToFavourites } from '../core/contracts';
import type { Fluture } from 'fluture';

export type MarkFactAsSeenService = ({
  userId: string,
  factId: string,
}) => Fluture<*, any>;

export default (
  addToFavourites: AddToFavourites,
): AddUserService => (details) => {
  return addToFavourites(details)
    .map((res) => {
      return res;
    });
};
