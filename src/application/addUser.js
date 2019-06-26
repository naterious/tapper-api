// @flow
import * as r from 'ramda';

import type { AddUser } from '../core/contracts';
import type { Fluture } from 'fluture';

export type AddUserService = (id: string) => Fluture<*, any>;

export default (
  addUser: AddUser,
): AddUserService => (id) => {

  return addUser(id)
    .map((res) => {
      return res;
    });
};
