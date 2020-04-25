import axios from 'axios';
import cheerio from 'cheerio';

export const getPage = async (url: string) => {
  const { data } = await axios.get(url)
  return cheerio.load(data)
}