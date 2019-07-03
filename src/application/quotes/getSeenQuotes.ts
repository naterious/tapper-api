import { FutureInstance as Future } from 'fluture';
import { GetSeenQuotes } from '../../core/contracts';

export type GetSeenQuotesService = (id: string) => Future<any, any>;

export default (
  getSeenQuotes: GetSeenQuotes,
): GetSeenQuotesService => (id) => {

  return getSeenQuotes(id)
    .map((res) => {
      return res;
    });
};
