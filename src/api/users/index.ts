import composeRegister from './register';
import validateRegisterInput from './validation/register';

import composeLogin from './login';
import validateLoginInput from './validation/login';
import { IUserDependencies } from './interfaces';

export default (dependencies: IUserDependencies) => {
  const registerMethod = composeRegister(
    validateRegisterInput,
    dependencies.addUserService,
  );

  const loginMethod = composeLogin(
    validateLoginInput,
    dependencies.loginService,
  );

  return {
    registerMethod,
    loginMethod,
  }
};