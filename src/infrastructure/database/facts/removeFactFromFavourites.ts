import * as r from 'ramda';

import { RemoveFactFromFavourites } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): RemoveFactFromFavourites => async(details) => {
  try {
    await client.connect();
    const db = client.db('TriviaTapper');
    const users = db.collection('users');

    const storedUsers = await users.find({ _id: details.userId }).toArray();
    const user = r.head(storedUsers);
    const newFavourites = r.without([ details.factId ], user.favouriteFacts);

    await db.collection('users').updateOne(
      // eslint-disable-next-line no-underscore-dangle
      { _id: user._id }, { $set: { favouriteFacts: newFavourites } });

    return 'OK';
  } catch (err) {
    return err;
  }
};