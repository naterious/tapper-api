import { GetUnseenFacts, GetUnseenQuotes } from '../../core/contracts';
import { EntityType } from '../interfaces';

export type GetUnseenService = (
  id: string,
  type: EntityType
) => Promise<any>;

export default (
  getUnseenFacts: GetUnseenFacts,
  getUnseenQuotes: GetUnseenQuotes,
): GetUnseenService => async (id, type) => {
  if (type === EntityType.FACT) {
    return await getUnseenFacts(id);
  } else {
    return await getUnseenQuotes(id);
  }
};
