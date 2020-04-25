import { GetUnseenFacts, GetUnseenQuotes } from '../../core/contracts';
import { EntityType } from '../interfaces';

export type GetUnseenService = (
  id: string,
  type: EntityType
) => Promise<any>;

export default (
  getUnseenFacts: GetUnseenFacts,
  getUnseenQuotes: GetUnseenQuotes,
): GetUnseenService => (id, type) => {
  if (type === EntityType.FACT) {
    return getUnseenFacts(id);
  }
  return getUnseenQuotes(id);

};
