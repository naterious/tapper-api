// @flow
import * as r from 'ramda';

import type { GetFactById } from '../core/contracts';
import type { Fluture } from 'fluture';

export type GetFactByIdService = (id) => Fluture<*, any>;

export default (
  getFactById: GetFactById,
): GetFactByIdService => (id) => {

  return getFactById(id)
    .map((res) => {
      return res;
    });
};
