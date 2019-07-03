import ExtendableError from 'es6-error';

export class RequestValidationError extends ExtendableError{
  data: Object;

  constructor(message: string, data?: Object){
    super(message);
    if (data) {
      this.data = data;
    }
  }
}

export class AuthInvalidError extends ExtendableError{}
export class PermissionDeniedError extends ExtendableError{}