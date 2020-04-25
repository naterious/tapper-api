import { FutureInstance as Future } from 'fluture';

import { GetUnseenQuotes } from '../../core/contracts';

export type GetUnseenQuotesService = (id: string) => Future<any, any>;

export default (
  getUnseenQuotes: GetUnseenQuotes,
): GetUnseenQuotesService => (id) => {

  return getUnseenQuotes(id)
    .map((res) => {
      return res;
    });
};
