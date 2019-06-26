// @flow
import Fluture from 'fluture';
import * as r from 'ramda';

import type { GetUser } from '../../core/contracts';

export default (db) => (details, callback) => {
  return Fluture.tryP(() => db.query(`
  for x in user
  filter x.username == '${details.username}'
  return x
  `))
    .chain((res) => Fluture.tryP(() => res.all()))
    .map((users) => {
      return r.map((user) => {
        return {
          name: user.name,
          id: user.id,
        }
      })(users);
    })
    .map((result) => callback(null, result))
    .mapRej((err) => callback(err))
}