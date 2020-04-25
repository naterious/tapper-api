import * as r from 'ramda';

import { GetFavouriteQuotes } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetFavouriteQuotes => async(id) => {

  try {
    await client.connect();
    const db = client.db('TriviaTapper');
    const users = db.collection('users');
    const quotes = db.collection('Quotes');

    const storedUsers = await users.find({ _id: id }).toArray();
    const user = r.head(storedUsers);

    const promises = r.map((favId) => {
      return quotes.find({ _id: favId }).toArray();
    })(user.favouriteQuotes);

    const favsArray = await Promise.all(promises);

    return r.unnest(favsArray);
  } catch (err) {
    return err;
  }
};