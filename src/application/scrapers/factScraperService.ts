import * as r from 'ramda';
import { ulid } from 'ulid';

import { FactsScraper, AddFactsToDatabase, GetAllFacts } from '../../core/contracts';

import { normalizeFacts } from '../../domain/normalizeFacts';

export type FactsScraperService = () => Promise<string | number>;

export default (
  factsScraper: FactsScraper,
  addFactsToDatabase: AddFactsToDatabase,
  getAllFacts: GetAllFacts,
): FactsScraperService => async() => {
  const content = await factsScraper();
  const storedFacts = await getAllFacts();

  const facts = r.without(storedFacts, normalizeFacts(content));

  const data = r.map((fact) => {
    const factId = ulid();
    return {
      _id: factId,
      fact,
      id: factId,
    };
  })(facts);

  return addFactsToDatabase(data);
};
