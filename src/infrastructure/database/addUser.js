// @flow
import Fluture from 'fluture';
import * as r from 'ramda';
import bcrypt from 'bcrypt';

import type { AddUser } from '../../core/contracts';

export default (client): AddUser => (user) => {

  return Fluture.tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');

      return Fluture.tryP(() => users.find({ email: user.email }).toArray())
        .chain((storedUsers) => {
          return r.ifElse(
            r.isEmpty,
            () => {
              return Fluture.tryP(() => bcrypt.hash(user.password, 10))
                .chain((hash) => {
                  const newUser = {
                    // eslint-disable-next-line no-underscore-dangle
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    password: hash,
                    favouriteFacts: [],
                    seenFacts: [],
                    favouriteQuotes: [],
                    seenQuotes: [],
                  };
                  return Fluture.tryP(
                    () => db.collection('users').insertOne(newUser)
                  );
                });
            },
            () => Fluture.reject('Email already exists')
          )(storedUsers);
        });
    })
    .map(() => {
      return r.omit([ 'password' ], user);
    })
    .mapRej((err) => err);
};