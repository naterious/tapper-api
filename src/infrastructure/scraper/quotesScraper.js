// @flow
import { tryP } from 'fluture';
import cheerio from 'cheerio';
import * as r from 'ramda';
import rp from 'request-promise';

import type { ScraperConfig, QuotesScraper } from '../../core/contracts';

/* eslint-disable */
let quotesArray = [];
var overallCount = 0;
var quoteId = '';
let testArr = [];
/* eslint-enable */

// eslint-disable-next-line
const quotesScraper: QuotesScraper = (config: ScraperConfig) => () => {

  const getQuotes = (deets: {
    newCount: Number,
    newId: String,
    // eslint-disable-next-line no-unused-vars
  }) => new Promise((resolve, reject) => {

    const options = r.ifElse(
      r.isNil,
      () => ({
        uri: `${config.url}/quotes/`,
        transform: (body) => cheerio.load(body),
      }),
      () => ({
        uri: `${config.url}/quotes/?count=${deets.count}&after=${deets.id}`,
        transform: (body) => cheerio.load(body),
      }),
    )(deets);

    return rp(options)
      .then((parsedPage) => {
        const te = r.map((i, element) => {
          //$FlowFixMe
          const id = r.head(
            r.split(
              '/',
              r.values(element.attribs)[2],
            ),
          )[4];

          /* eslint-disable */
          overallCount = i + 1;
          quoteId = id;
          quotesArray.push(element.children[0].data);
          /* eslint-enable */

          return {
            id,
            count: i + 1,
          };

        })(parsedPage('.title.may-blank'));

        return resolve(r.last(te));
      })
      .catch((err) => {
        return err;
        // Crawling failed or Cheerio choked...
      });
  });

  return tryP(() => getQuotes())
    // .chain((res) => tryP(() => getQuotes(res)))
    // .chain((res) => tryP(() => getQuotes(res)))
    // .chain((res) => tryP(() => getQuotes(res)))
    // .chain((res) => tryP(() => getQuotes(res)))
    // .chain((res) => tryP(() => getQuotes(res)))
    // .chain((res) => tryP(() => getQuotes(res)))
    .map(() => quotesArray);

};

export default quotesScraper;
