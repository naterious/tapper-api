import * as r from 'ramda';

import { ScraperConfig, QuotesScraper } from '../../core/contracts';
import getPage from './getPage';

/* eslint-disable */ 
let quotesArray: string[] = [];
var overallCount = 0;
var quoteId = '';
let testArr = [];

const quotesScraper = (config: ScraperConfig): QuotesScraper => async() => {

  const getQuotes = (deets?: {
    count: Number,
    id: String,
  }) => new Promise(async(resolve) => {

    const url = r.ifElse(
      r.isNil,
      () => `${config.url}/quotes/`,
      () => `${config.url}/quotes/?count=${deets.count}&after=${deets.id}`,
    )(deets);

    try {
      const parsedPage = await getPage(url);
      // @ts-ignore
      const te = r.map((i, element) => {
        const id = r.head(r.split('/', r.values(element.attribs)[2]))[4];
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
    } catch (err) {
      return err;
    }
  });

  await getQuotes();
  return quotesArray;

};

export default quotesScraper;
