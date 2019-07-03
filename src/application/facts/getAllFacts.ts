import { FutureInstance as Future } from 'fluture';

import { GetAllFacts } from '../../core/contracts';

export type GetAllFactsService = () => Future<any, any>;

export default (
  getAllFacts: GetAllFacts,
): GetAllFactsService => () => {

  return getAllFacts()
    .map((res) => {
      return res;
    });
};
