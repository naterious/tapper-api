import * as r from 'ramda';

import { AddQuoteToFavourites } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): AddQuoteToFavourites => async (details) => {

  try {
    await client.connect();
    const db = client.db('TriviaTapper');
    const users = db.collection('users');

    const storedUsers = await users.find({ _id: details.userId }).toArray();
    const user = r.head(storedUsers);
    
    const newFavourites = r.append(details.quoteId, user.favouriteQuotes);
    await db.collection('users').updateOne(
      // eslint-disable-next-line no-underscore-dangle
      { _id: user._id }, { $set: { favouriteQuotes: newFavourites } });
    return 'OK';
  }
  catch (err) {
    return err;
  }
};