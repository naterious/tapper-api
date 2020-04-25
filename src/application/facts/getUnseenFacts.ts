import { FutureInstance as Future } from 'fluture';

import { GetUnseenFacts } from '../../core/contracts';

export type GetUnseenFactsService = (id: string) => Future<any, any>;

export default (
  getUnseenFacts: GetUnseenFacts,
): GetUnseenFactsService => (id) => {

  return getUnseenFacts(id)
    .map((res) => {
      return res;
    });
};
