import { FutureInstance as Future } from 'fluture';
import { Login } from '../../core/contracts';

export type LoginService = (userInput: {
  email: string,
  password: string,
}) => Future<any, any>;

export default (
  login: Login,
): LoginService => (userInput) => {

  return login(userInput)
    .map((res) => {
      return res;
    });
};
