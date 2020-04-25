import { MongoClient } from "mongodb";

import composeAddUser from "./addUser";
import composeLogin from './login';

export default (client: MongoClient) => {
  const addUser = composeAddUser(client);
  const login = composeLogin(client);

  return {
    addUser,
    login,
  }
}