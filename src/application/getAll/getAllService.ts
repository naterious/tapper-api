import { GetAllFacts, GetAllQuotes } from '../../core/contracts';
import { EntityType } from '../interfaces';

export type GetAllService = (type: EntityType) => Promise<any>;

export default (
  getAllFacts: GetAllFacts,
  getAllQuotes: GetAllQuotes
): GetAllService => (type) => {
  if (type === EntityType.FACT) {
    return getAllFacts();
  }
  return getAllQuotes();

};
