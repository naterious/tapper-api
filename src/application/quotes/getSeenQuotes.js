// @flow
import type { GetSeenQuotes } from '../../core/contracts';
import type { Fluture } from 'fluture';

export type GetSeenQuotesService = () => Fluture<*, any>;

export default (
  getSeenQuotes: GetSeenQuotes,
): GetSeenQuotesService => (id) => {

  return getSeenQuotes(id)
    .map((res) => {
      return res;
    });
};
