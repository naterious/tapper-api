import { tryP, of, reject } from 'fluture';
import * as r from 'ramda';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';

import { Login } from '../../core/contracts';
import { Client } from './repositories/getInstance';

export default (client: Client): Login => (userInput) => {

  return tryP(() => client.connect())
    .chain(() => {
      const db = client.db('TriviaTapper');
      const users = db.collection('users');

      return tryP(
        () => users.find({ email: userInput.email }).toArray()
      )
        .chain((storedUsers: object[]) => {
          return r.ifElse(
            r.isEmpty,
            () => reject('Email not found'),
            () => {
              // @ts-ignore
              const user: {
                password: string,
                id: string,
                _id: string,
                name: string,
              } = r.head(storedUsers);
              return tryP(
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

                      return of({
                        success: true,
                        token: `Bearer ${token}`,
                        // eslint-disable-next-line no-underscore-dangle
                        id: user._id,
                      });
                    },
                    () => reject('Password incorrect')
                  )(isMatch);
                });
            }
          )(storedUsers);
        });
    })
    .map((res) => res)
    .mapRej((err) => err);
};