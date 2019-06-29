// @flow
import type { Fluture } from 'fluture';
import type { Login } from '../../core/contracts';

export type LoginService = (userInput: Object) => Fluture<*, any>;

export default (
  login: Login,
): LoginService => (userInput) => {

  return login(userInput)
    .map((res) => {
      return res;
    });
};
