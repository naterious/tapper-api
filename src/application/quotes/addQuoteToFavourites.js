// @flow
import type { AddQuoteToFavourites } from '../../core/contracts';
import type { Fluture } from 'fluture';

export type MarkQuoteAsSeenService = ({
  userId: string,
  quoteId: string,
}) => Fluture<*, any>;

export default (
  addQuoteToFavourites: AddQuoteToFavourites,
): AddUserService => (details) => {
  return addQuoteToFavourites(details)
    .map((res) => {
      return res;
    });
};
