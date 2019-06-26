// @flow
import * as r from 'ramda';
import { ulid } from 'ulid';

import type { Scraper, AddToDatabase, GetAllFacts } from '../core/contracts';
import type { Fluture } from 'fluture';

import { normalizeFacts } from '../domain/normalizeFacts';

export type ScraperService = () => Fluture<*, any>;

export default (
  scraper: Scraper,
  addToDatabase: AddToDatabase,
  getAllFacts: GetAllFacts,
): ScraperService => () => {

  return scraper()
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
            }
          })(facts);
    
          return addToDatabase(data);
        })
    })
    .map((res) => {
      return res;
    })
};
