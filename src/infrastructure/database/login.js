// @flow
import Fluture from 'fluture';
import * as r from 'ramda';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';

import type { Login } from '../../core/contracts';

export default (client): Login => (userInput) => {

  return Fluture.tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');

      return Fluture.tryP(
        () => users.find({ email: userInput.email }).toArray()
      )
        .chain((storedUsers) => {
          return r.ifElse(
            r.isEmpty,
            () => Fluture.reject('Email not found'),
            () => {
              const user = r.head(storedUsers);
              return Fluture.tryP(
                () => bcrypt.compare(userInput.password, user.password)
              )
                .chain((isMatch) => {
                  return r.ifElse(
                    r.equals(true),
                    () => {
                      const payload = {
                        id: user.id,
                        name: user.name,
                      };

                      const token = jwt.sign(
                        payload,
                        config.get('passport.secretOrKey'),
                        {
                          expiresIn: 31556926, // 1 year in seconds
                        },
                      );

                      return Fluture.of({
                        success: true,
                        token: `Bearer ${token}`,
                        // eslint-disable-next-line no-underscore-dangle
                        id: user._id,
                      });
                    },
                    () => Fluture.reject('Password incorrect')
                  )(isMatch);
                });
            }
          )(storedUsers);
        });
    })
    .map((res) => res)
    .mapRej((err) => err);
};