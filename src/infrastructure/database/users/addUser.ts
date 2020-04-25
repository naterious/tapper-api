import * as r from 'ramda';
import bcrypt from 'bcrypt';

import { AddUser } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): AddUser => async (user) => {
  try {
    await client.connect();
    const db = client.db('TriviaTapper');
    const users = db.collection('users');
    const storedUsers = await users.find({ email: user.email }).toArray();
    r.ifElse(
      r.isEmpty,
      async () => {
        const hash = await bcrypt.hash(user.password, 10);
        const newUser = {
          // eslint-disable-next-line no-underscore-dangle
          _id: user._id,
          name: user.name,
          email: user.email,
          password: hash,
          favouriteFacts: (<any[]>[]),
          seenFacts: (<any[]>[]),
          favouriteQuotes: (<any[]>[]),
          seenQuotes: (<any[]>[]),
        };
        return db.collection('users').insertOne(newUser);
      },
      () => Promise.reject('Email already exists')
    )(storedUsers);
    return r.omit(['password'], user);
  }
  catch (err) {
    return err;
  }
};