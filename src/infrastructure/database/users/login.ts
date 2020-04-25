import * as r from 'ramda';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';

import { Login } from '../../../core/contracts';
import { Client } from '../repositories/getInstance';

export default (client: Client): Login => async(userInput) => {
  try {
    await client.connect();
    const db = client.db('TriviaTapper');
    const users = db.collection('users');
    const storedUsers = await users.find({ email: userInput.email }).toArray();
    const res = r.ifElse(r.isEmpty, () => Promise.reject('Email not found'), async() => {
      const user = r.head(storedUsers);
      const isMatch = await bcrypt.compare(userInput.password, user.password);
      return r.ifElse(
        r.equals(true),
        () => {
          const payload = {
            id: user.id,
            name: user.name,
          };
          const token = jwt.sign(payload, config.get('passport.secretOrKey'), {
            expiresIn: 31556926,
          });
          return Promise.resolve({
            success: true,
            token: `Bearer ${token}`,
            // eslint-disable-next-line no-underscore-dangle
            id: user._id,
          });
        },
        () => Promise.reject('Password incorrect')
      )(isMatch);
    })(storedUsers);
    return res;
  } catch (err) {
    return err;
  }
};