import { GetFactById, GetQuoteById } from '../../core/contracts';
import { EntityType } from '../interfaces';

export type GetByIdService = (
  id: string,
  type: EntityType,
) => Promise<any>;

export default (
  getFactById: GetFactById,
  getQuoteById: GetQuoteById,
): GetByIdService => async (id, type) => {
  if (type === EntityType.FACT) {
    return await getFactById(id);
  } else {
    return await getQuoteById(id);
  }
};
