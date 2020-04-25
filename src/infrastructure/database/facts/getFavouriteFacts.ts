import * as r from 'ramda';

import { GetFavouriteFacts } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetFavouriteFacts => async(id) => {
  try {
    await client.connect();
    const db = client.db('TriviaTapper');
    const users = db.collection('users');
    const facts = db.collection('Facts');

    const storedUsers = await users.find({ _id: id }).toArray();
    const user = r.head(storedUsers);

    const promises = r.map((favId) => {
      return facts.find({ _id: favId }).toArray();
    })(user.favouriteFacts);

    const favsArray = await Promise.all(promises);

    return r.unnest(favsArray);
  } catch (err) {
    return err;
  }
};