import ExtendableError from 'es6-error';

export class RequestValidationError extends ExtendableError{
  data: Object;

  // eslint-disable-next-line
  constructor(message: string, data?: Object){
    super(message);
    if (data) {
      // eslint-disable-next-line
      this.data = data;
    }
  }
}

export class AuthInvalidError extends ExtendableError{}
export class PermissionDeniedError extends ExtendableError{}