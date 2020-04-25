import { Response, Request } from 'express';

export type ApiMethod = (
  req: Request,
  res: Response,
) => Promise<Response>;