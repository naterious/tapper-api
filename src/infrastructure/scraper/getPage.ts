import axios from 'axios';
import cheerio from 'cheerio';

const getPage = async(url: string) => {
  const { data } = await axios.get(url);
  return cheerio.load(data);
};

export default getPage;