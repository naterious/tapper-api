import * as r from 'ramda';

import { GetUnseenQuotes } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetUnseenQuotes => async (id) => {

  try {
    await client.connect();
    const db = client.db('TriviaTapper');
    const users = db.collection('users');
    const quotes = db.collection('Quotes');

    const storedUsers = await users.find({ _id: id }).toArray();
    const user = r.head(storedUsers);

    if (r.isEmpty(user.seenQuotes)) {
      return [];
    }

    const promises = r.map((seenId) => {
      return quotes.find({ _id: seenId }).toArray();
    })(user.seenQuotes);

    const seenArray = await Promise.all(promises);
    const seenQuotes = r.unnest(seenArray);

    const allQuotes = await quotes.find({}).toArray();
    
    return r.without(seenQuotes, allQuotes);
  }
  catch (err) {
    return err;
  }
};