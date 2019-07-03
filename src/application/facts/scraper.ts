import * as r from 'ramda';
import { ulid } from 'ulid';
import { FutureInstance as Future } from 'fluture';

import { FactsScraper, AddFactsToDatabase, GetAllFacts } from '../../core/contracts';

import { normalizeFacts } from '../../domain/normalizeFacts';

export type FactsScraperService = () => Future<any, any>;

export default (
  factsScraper: FactsScraper,
  addFactsToDatabase: AddFactsToDatabase,
  getAllFacts: GetAllFacts,
): FactsScraperService => () => {

  return factsScraper()
    .chain((content) => {
      return getAllFacts()
        .chain((storedFacts) => {
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
        });
    })
    .map((res) => {
      return res;
    });
};
