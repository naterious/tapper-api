// @flow
import * as r from 'ramda';

import type { GetAllFacts } from '../core/contracts';
import type { Fluture } from 'fluture';

export type GetAllFactsService = () => Fluture<*, any>;

export default (
  getAllFacts: GetAllFacts,
): GetAllFactsService => () => {

  return getAllFacts()
    .map((res) => {
      return res;
    });
};
