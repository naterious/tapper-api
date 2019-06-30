// @flow
import Fluture from 'fluture';
import * as r from 'ramda';

import type { MarkQuoteAsSeenByUser } from '../../../core/contracts';

export default (client): MarkQuoteAsSeenByUser => (details) => {

  return Fluture.tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');

      return Fluture.tryP(() => users.find({ _id: details.userId }).toArray())
        .chain((storedUsers) => {
          const user = r.head(storedUsers);
          const newSeen = r.append(details.quoteId, user.seenQuotes);

          return Fluture.tryP(() => db.collection('users').updateOne(
            // eslint-disable-next-line no-underscore-dangle
            { _id: user._id },
            { $set: { seenQuotes: newSeen } },
          ));
        });
    })
    .map(() => 'OK')
    .mapRej((err) => err);
};