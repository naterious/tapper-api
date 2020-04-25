import createAddUser from './addUser';
import createLogin from './login';

import { AddUser, Login } from '../../core/contracts';

interface IUsersDependencies {
  addUser: AddUser,
  login: Login
}
export default (dependencies: IUsersDependencies) => {
  const addUserService = createAddUser(
    dependencies.addUser,
  );

  const loginService = createLogin(
    dependencies.login,
  );

  return {
    addUserService,
    loginService,
  }
};