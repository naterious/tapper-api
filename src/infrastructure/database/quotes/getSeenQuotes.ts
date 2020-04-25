import * as r from 'ramda';

import { GetSeenQuotes } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetSeenQuotes => async(id) => {
  try {
    await client.connect();
    const db = client.db('TriviaTapper');
    const users = db.collection('users');
    const quotes = db.collection('Quotes');

    const storedUsers = await users.find({ _id: id }).toArray();
    const user = r.head(storedUsers);

    const promises = r.map((seenId) => {
      return quotes.find({ _id: seenId }).toArray();
    })(user.seenQuotes);

    const seenArray = await Promise.all(promises);
    const result = r.unnest(seenArray);
    return result;
  } catch (err) {
    return err;
  }
};