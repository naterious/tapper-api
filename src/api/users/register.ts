import uuid from 'uuid';
import { Response, Request } from 'express';

import {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';
import { AddUserService } from '../../application/users/addUser';
import { ValidateRegisterInput } from './validation/register';

export type RegisterMethod = (
  req: Request,
  res: Response,
) => any | Promise<any>;

export default (
  validateRegisterInput: ValidateRegisterInput,
  addUserService: AddUserService,
  // eslint-disable-next-line no-unused-vars
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): RegisterMethod => (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newUser = {
    _id: uuid(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  return addUserService(newUser)
    .promise()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
