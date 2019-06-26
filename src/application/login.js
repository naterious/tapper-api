// @flow
import * as r from 'ramda';

import type { Login } from '../core/contracts';
import type { Fluture } from 'fluture';

export type LoginService = (userInput: Object) => Fluture<*, any>;

export default (
  login: Login,
): LoginService => (userInput) => {

  return login(userInput)
    .map((res) => {
      return res;
    });
};
