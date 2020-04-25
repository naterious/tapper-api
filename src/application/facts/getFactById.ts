import { FutureInstance as Future } from 'fluture';

import { GetFactById } from '../../core/contracts';

export type GetFactByIdService = (id: string) => Future<any, any>;

export default (
  getFactById: GetFactById,
): GetFactByIdService => (id) => {

  return getFactById(id)
    .map((res) => {
      return res;
    });
};
