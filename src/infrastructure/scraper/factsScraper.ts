import { tryP } from 'fluture';
import cheerio from 'cheerio';
import * as r from 'ramda';
import rp from 'request-promise';

import { ScraperConfig, FactsScraper } from '../../core/contracts';

/* eslint-disable */
let factsArray: string[] = [];
var overallCount = 0;
var factId = '';
let testArr = [];
/* eslint-enable */

const factsScraper = (config: ScraperConfig): FactsScraper => () => {

  const getFacts = (deets: {
    count: Number,
    id: String,
  }) => new Promise((resolve) => {

    const options = r.ifElse(
      r.isNil,
      () => ({
        uri: `${config.url}/todayilearned/`,
        transform: (body: any) => cheerio.load(body),
      }),
      () => ({
        uri: `${config.url}/todayilearned/?count=${deets.count}&after=${deets.id}`,
        transform: (body: any) => cheerio.load(body),
      }),
    )(deets);

    return rp(options)
      .then((parsedPage) => {
        // @ts-ignore
        const te = r.map((i, element) => {
          const id = r.head(
            r.split(
              '?',
              r.values(element.attribs)[5],
            ),
          ).substr(23);

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
      })
      .catch((err) => {
        return err;
        // Crawling failed or Cheerio choked...
      });
  });

  // @ts-ignore
  return tryP(() => getFacts())
    // .chain((res) => tryP(() => getFacts(res)))
    // .chain((res) => tryP(() => getFacts(res)))
    // .chain((res) => tryP(() => getFacts(res)))
    // .chain((res) => tryP(() => getFacts(res)))
    // .chain((res) => tryP(() => getFacts(res)))
    // .chain((res) => tryP(() => getFacts(res)))
    // .chain((res) => tryP(() => getFacts(res)))
    .map(() => factsArray);

};

export default factsScraper;
