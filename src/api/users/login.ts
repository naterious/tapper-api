import { Response, Request } from 'express';

import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';
import { LoginService } from '../../application/users/login';
import { ValidateLoginInput } from './validation/login';

export type LoginMethod = (
  req: Request & {
    body: {
      email: string,
      password: string,
    }
  },
  res: Response,
) => any | Promise<any>;

export default (
  validateLoginInput: ValidateLoginInput,
  loginService: LoginService,
  // eslint-disable-next-line no-unused-vars
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): LoginMethod => (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const userInput = {
    email: req.body.email,
    password: req.body.password,
  };

  return loginService(userInput)
    .promise()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
