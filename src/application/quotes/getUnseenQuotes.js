// @flow
import type { GetUnseenQuotes } from '../../core/contracts';
import type { Fluture } from 'fluture';

export type GetUnseenQuotesService = () => Fluture<*, any>;

export default (
  getUnseenQuotes: GetUnseenQuotes,
): GetUnseenQuotesService => (id) => {

  return getUnseenQuotes(id)
    .map((res) => {
      return res;
    });
};
