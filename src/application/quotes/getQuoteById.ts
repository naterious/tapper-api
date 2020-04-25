import { FutureInstance as Future } from 'fluture';

import { GetQuoteById } from '../../core/contracts';

export type GetQuoteByIdService = (id: string) => Future<any, any>;

export default (
  getQuoteById: GetQuoteById,
): GetQuoteByIdService => (id) => {

  return getQuoteById(id)
    .map((res) => {
      return res;
    });
};
