import * as r from 'ramda';

import { MarkFactAsSeenByUser } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): MarkFactAsSeenByUser => async (details) => {
  try {
    await client.connect();
    const db = client.db('TriviaTapper');
    const users = db.collection('users');

    const storedUsers = await users.find({ _id: details.userId }).toArray();
    const user = r.head(storedUsers);
    
    const newSeen = r.append(details.factId, user.seenFacts);
    db.collection('users').updateOne(
      // eslint-disable-next-line no-underscore-dangle
      { _id: user._id }, { $set: { seenFacts: newSeen } });
    
    return 'OK';
  }
  catch (err) {
    return err;
  }
};