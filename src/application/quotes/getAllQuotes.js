// @flow
import type { GetAllQuotes } from '../../core/contracts';
import type { Fluture } from 'fluture';

export type GetAllQuotesService = () => Fluture<*, any>;

export default (
  getAllQuotes: GetAllQuotes,
): GetAllQuotesService => () => {

  return getAllQuotes()
    .map((res) => {
      return res;
    });
};
