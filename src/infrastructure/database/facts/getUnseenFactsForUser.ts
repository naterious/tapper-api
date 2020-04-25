import * as r from 'ramda';

import { GetUnseenFacts } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): GetUnseenFacts => async (id) => {
  try {
    await client.connect();
    const db = client.db('TriviaTapper');
    const users = db.collection('users');
    const facts = db.collection('Facts');

    const storedUsers = await users.find({ _id: id }).toArray();
    const user = r.head(storedUsers);

    if (r.isEmpty(user.seenFacts)) {
      return [];
    }

    const promises = r.map((seenId) => {
      return facts.find({ _id: seenId }).toArray();
    })(user.seenFacts);

    const seenArray = await Promise.all(promises);
    const seenFacts = r.unnest(seenArray);
    const allFacts = await facts.find({}).toArray();

    return r.without(seenFacts, allFacts);
  }
  catch (err) {
    return err;
  }
};