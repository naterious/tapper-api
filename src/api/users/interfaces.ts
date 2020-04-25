import { LoginService } from "../../application/users/login";
import { AddUserService } from "../../application/users/addUser";

export interface IUserDependencies {
  addUserService: AddUserService;
  loginService: LoginService;
}