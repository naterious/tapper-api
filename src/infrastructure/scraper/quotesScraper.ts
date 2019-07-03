import { tryP } from 'fluture';
import cheerio from 'cheerio';
import * as r from 'ramda';
import rp from 'request-promise';

import { ScraperConfig, QuotesScraper } from '../../core/contracts';

let quotesArray: string[] = [];
var overallCount = 0;
var quoteId = '';
let testArr = [];

const quotesScraper = (config: ScraperConfig): QuotesScraper => () => {

  const getQuotes = (deets: {
    count: Number,
    id: String,
  } | {}) => new Promise((resolve, reject) => {

    const options = r.ifElse(
      r.isNil,
      () => ({
        uri: `${config.url}/quotes/`,
        transform: (body: any) => cheerio.load(body),
      }),
      () => ({
        // @ts-ignore
        uri: `${config.url}/quotes/?count=${deets.count}&after=${deets.id}`,
        transform: (body: any) => cheerio.load(body),
      }),
    )(deets);

    return rp(options)
      .then((parsedPage) => {
        // @ts-ignore
        const te = r.map((i, element) => {
          const id = r.head(
            r.split(
              '/',
              r.values(element.attribs)[2],
            ),
          )[4];

          overallCount = i + 1;
          quoteId = id;
          quotesArray.push(element.children[0].data);

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

  return tryP(() => getQuotes({}))
    // .chain((res) => tryP(() => getQuotes(res)))
    // .chain((res) => tryP(() => getQuotes(res)))
    // .chain((res) => tryP(() => getQuotes(res)))
    // .chain((res) => tryP(() => getQuotes(res)))
    // .chain((res) => tryP(() => getQuotes(res)))
    // .chain((res) => tryP(() => getQuotes(res)))
    // @ts-ignore
    .map(() => quotesArray);

};

export default quotesScraper;
