import * as r from 'ramda';

import { ScraperConfig, FactsScraper } from '../../core/contracts';
import getPage from './getPage';

/* eslint-disable */
let factsArray: string[] = [];
var overallCount = 0;
var factId = '';
let testArr = [];

const factsScraper = (config: ScraperConfig): FactsScraper => async() => {
  const getFacts = (deets?: {
    count: Number,
    id: String,
  }) => new Promise(async(resolve) => {
    const url = r.ifElse(
      r.isNil,
      () => `${config.url}/todayilearned/`,
      () => `${config.url}/todayilearned/?count=${deets.count}&after=${deets.id}`,
    )(deets);

    try {
      const parsedPage = await getPage(url);
      // @ts-ignore
      const te = r.map((i: any, element: any) => {
        const id = r.head(r.split('?', r.values(element.attribs)[5])).substr(23);
        /* eslint-disable */
        overallCount = i + 1;
        factId = id;
        factsArray.push(element.children[0].data);
        /* eslint-enable */
        return {
          id,
          count: i + 1,
        };
      })(parsedPage('.title.may-blank.outbound'));
      return resolve(r.last(te));
    } catch (err) {
      return err;
    }
  });

  await getFacts();
  return factsArray;
};

export default factsScraper;
