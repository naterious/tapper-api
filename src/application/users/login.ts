import { Login } from '../../core/contracts';

export type LoginService = (userInput: {
  email: string,
  password: string,
}) => Promise<any>;

export default (
  login: Login,
): LoginService => (userInput) => {
  return login(userInput);
};
