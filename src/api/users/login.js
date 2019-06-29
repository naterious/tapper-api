// @flow
import type { $Response, $Request } from 'express';

import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../../core/contracts';

export type LoginMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  validateLoginInput,
  loginService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): LoginMethod => (req: $Request, res: $Response) => {
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
