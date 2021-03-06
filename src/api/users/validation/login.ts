import Validator from 'validator';
import isEmpty from 'is-empty';

export type ValidateLoginInput = (data: {
  email: string,
  password: string,
}) => {
  errors: object,
  isValid: boolean,
};

/* eslint-disable */
const validateLoginInput: ValidateLoginInput = (data) => {
  let errors = <{
    email: string,
    password: string,
  }>{};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateLoginInput;