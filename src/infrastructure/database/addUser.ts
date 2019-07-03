import { tryP, reject } from 'fluture';
import * as r from 'ramda';
import bcrypt from 'bcrypt';

import { AddUser } from '../../core/contracts';
import { Client } from './repositories/getInstance';

export default (client: Client): AddUser => (user) => {

  return tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');

      return tryP(() => users.find({ email: user.email }).toArray())
        .chain((storedUsers) => {
          return r.ifElse(
            r.isEmpty,
            () => {
              return tryP(() => bcrypt.hash(user.password, 10))
                .chain((hash: string) => {
                  const newUser = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    password: hash,
                    favouriteFacts: <any[]>[],
                    seenFacts: <any[]>[],
                    favouriteQuotes: <any[]>[],
                    seenQuotes: <any[]>[],
                  };
                  return tryP(
                    () => db.collection('users').insertOne(newUser)
                  );
                });
            },
            () => reject('Email already exists')
          )(storedUsers);
        });
    })
    .map(() => {
      return r.omit([ 'password' ], user);
    })
    .mapRej((err) => err);
};