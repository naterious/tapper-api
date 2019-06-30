// @flow
import type { GetQuoteById } from '../../core/contracts';
import type { Fluture } from 'fluture';

export type GetQuoteByIdService = (id) => Fluture<*, any>;

export default (
  getQuoteById: GetQuoteById,
): GetQuoteByIdService => (id) => {

  return getQuoteById(id)
    .map((res) => {
      return res;
    });
};
