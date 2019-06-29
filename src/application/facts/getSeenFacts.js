// @flow
import type { GetSeenFacts } from '../../core/contracts';
import type { Fluture } from 'fluture';

export type GetSeenFactsService = () => Fluture<*, any>;

export default (
  getSeenFacts: GetSeenFacts,
): GetSeenFactsService => (id) => {

  return getSeenFacts(id)
    .map((res) => {
      return res;
    });
};
