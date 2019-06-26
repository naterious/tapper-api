// @flow
import * as r from 'ramda';

import type { GetUnseenFacts } from '../core/contracts';
import type { Fluture } from 'fluture';

export type GetUnseenFactsService = () => Fluture<*, any>;

export default (
  getUnseenFacts: GetUnseenFacts,
): GetUnseenFactsService => (id) => {

  return getUnseenFacts(id)
    .map((res) => {
      return res;
    });
};
