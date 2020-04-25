import { FutureInstance as Future } from 'fluture';
import { AddUser } from '../../core/contracts';

export type AddUserService = (user: {
  _id: string,
  name: string,
  email: string,
  password: string,
}) => Future<any, any>;

export default (
  addUser: AddUser,
): AddUserService => (id) => {

  return addUser(id)
    .map((res) => {
      return res;
    });
};
