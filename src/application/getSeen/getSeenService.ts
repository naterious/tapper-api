import { GetSeenFacts, GetSeenQuotes } from '../../core/contracts';
import { EntityType } from '../interfaces';

export type GetSeenService = (
  id: string,
  type: EntityType,
) => Promise<any>;

export default (
  getSeenFacts: GetSeenFacts,
  getSeenQuotes: GetSeenQuotes,
): GetSeenService => async (id, type) => {
  if (type === EntityType.FACT) {
    return await getSeenFacts(id);
  } else {
    return await getSeenQuotes(id);
  }
};
