import { LoginService } from '../../application/users/login';
import { ValidateLoginInput } from './validation/login';
import { ApiMethod } from '../types';

export default (
  validateLoginInput: ValidateLoginInput,
  loginService: LoginService,
): ApiMethod => async (req, res) => {
  try {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const userInput = {
      email: req.body.email,
      password: req.body.password,
    };
  
    const result = loginService(userInput);
    return res.status(200).send(result);
  }
  catch (err) {
    return res.status(500).send(err);
  }
};
