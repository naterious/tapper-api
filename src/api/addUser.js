// @flow
import type { $Response, $Request } from 'express';

import type { AddUserService } from '../application/addUser';
import type {
  Logger,
  //DefaultApiMethodErrorHandler,
} from '../core/contracts';

export type AddUserMethod = (
  req: Request,
  res: Response,
) => Promise<any>;

export default (
  addUserService: AddUserService,
  // eslint-disable-next-line
  logger: Logger,
  //defaultApiMethodErrorHandler: DefaultApiMethodErrorHandler,
): AddUserMethod => (req: $Request, res: $Response) => {
  return addUserService(req.query.id)
    //.mapRej(defaultApiMethodErrorHandler)
    .promise()
    .then((result) => {
      return res.status(200).send(`Added user with id: ${result}`);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
