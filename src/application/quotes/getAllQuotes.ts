import { FutureInstance as Future } from 'fluture';
import { GetAllQuotes } from '../../core/contracts';

export type GetAllQuotesService = () => Future<any, any>;

export default (
  getAllQuotes: GetAllQuotes,
): GetAllQuotesService => () => {

  return getAllQuotes()
    .map((res) => {
      return res;
    });
};
