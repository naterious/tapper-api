import uuid from 'uuid';
import { AddUserService } from '../../application/users/addUser';
import { ValidateRegisterInput } from './validation/register';
import { ApiMethod } from '../types';

export default (
  validateRegisterInput: ValidateRegisterInput,
  addUserService: AddUserService,
): ApiMethod => async (req, res) => {
  try {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const newUser = {
      _id: uuid.v4(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    const result = addUserService(newUser);
    return res.status(200).send(result);
  }
  catch (err) {
    return res.status(500).send(err);
  }
};
