// @flow
import type { Fluture } from 'fluture';
import type { AddUser } from '../../core/contracts';

export type AddUserService = (id: string) => Fluture<*, any>;

export default (
  addUser: AddUser,
): AddUserService => (id) => {

  return addUser(id)
    .map((res) => {
      return res;
    });
};
