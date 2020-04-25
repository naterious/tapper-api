import { FutureInstance as Future } from 'fluture';

import { GetSeenFacts } from '../../core/contracts';

export type GetSeenFactsService = (id: string) => Future<any, any>;

export default (
  getSeenFacts: GetSeenFacts,
): GetSeenFactsService => (id) => {

  return getSeenFacts(id)
    .map((res) => {
      return res;
    });
};
