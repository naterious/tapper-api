import * as r from 'ramda';

import { GetSeenFacts } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetSeenFacts => async (id) => {
  try {
    await client.connect();
    const db = client.db('TriviaTapper');
    const users = db.collection('users');
    const facts = db.collection('Facts');

    const storedUsers = await users.find({ _id: id }).toArray();
    const user = r.head(storedUsers);

    const promises = r.map((seenId) => {
      return facts.find({ _id: seenId }).toArray();
    })(user.seenFacts);

    const seenArray = await Promise.all(promises);

    return r.unnest(seenArray);
  }
  catch (err) {
    return err;
  }
};