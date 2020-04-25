import { AddUser } from '../../core/contracts';

export type AddUserService = (user: {
  _id: string,
  name: string,
  email: string,
  password: string,
}) => Promise<any>;

export default (
  addUser: AddUser,
): AddUserService => async (id) => {
  return await addUser(id)
};
