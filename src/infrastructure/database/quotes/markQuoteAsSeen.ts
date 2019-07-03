import { tryP } from 'fluture';
import * as r from 'ramda';

import { MarkQuoteAsSeenByUser } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): MarkQuoteAsSeenByUser => (details) => {

  return tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');

      return tryP(() => users.find({ _id: details.userId }).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);
          const newSeen = r.append(details.quoteId, user.seenQuotes);

          return tryP(() => db.collection('users').updateOne(
            { _id: user._id },
            { $set: { seenQuotes: newSeen } },
          ));
        });
    })
    .map(() => 'OK')
    .mapRej((err) => err);
};