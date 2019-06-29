// @flow
import uuid from 'uuid';
import type { $Response, $Request } from 'express';

import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

// eslint-disable-next-line
var user = require('../../core/models/user');

export type RegisterMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  validateRegisterInput,
  addUserService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): RegisterMethod => (req: $Request, res: $Response) => {
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
