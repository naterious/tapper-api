// @flow
import * as r from 'ramda';
import { ulid } from 'ulid';

import type { FactsScraper, AddFactsToDatabase, GetAllFacts } from '../../core/contracts';
import type { Fluture } from 'fluture';

import { normalizeFacts } from '../../domain/normalizeFacts';

export type FactsScraperService = () => Fluture<*, any>;

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