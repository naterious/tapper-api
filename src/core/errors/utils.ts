import {
  pipe, is, T, cond, assoc, always, when,
} from 'ramda';

import {
  RequestValidationError,
  PermissionDeniedError,
  AuthInvalidError,
} from './errorsClass';

import {
  Logger, ErrorWithCode,
} from '../contracts';

export const stringifyError = (err: Error): string => {
  return `${err.name} - ${err.message}`;
};

export const getErrorWithCode = (err: Error): ErrorWithCode => {
  const code: number = cond([
    [ is(RequestValidationError), always(1000) ],
    [ is(PermissionDeniedError), always(6000) ],
    [ is(AuthInvalidError), always(6100) ],
    [ T, always(5000) ],
  ])(err);

  return pipe(
    assoc('code', code),
    assoc('message', err.message),
    when(
      () => (code === 1000),
      // @ts-ignore err.data exists only for RequestValidationError
      assoc('data', err.data),
    ),
  )({});
};

export const defaultApiMethodErrorHandler = (
  logger: Logger,
) => (
  err: Error,
): ErrorWithCode => {
  if (!is(RequestValidationError, err)) {
    logger.error(stringifyError(err));
  }
  return getErrorWithCode(err);
};
