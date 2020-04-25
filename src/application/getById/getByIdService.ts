import { GetFactById, GetQuoteById } from '../../core/contracts';
import { EntityType } from '../interfaces';

export type GetByIdService = (
  id: string,
  type: EntityType,
) => Promise<any>;

export default (
  getFactById: GetFactById,
  getQuoteById: GetQuoteById,
): GetByIdService => (id, type) => {
  if (type === EntityType.FACT) {
    return getFactById(id);
  }
  return getQuoteById(id);

};
