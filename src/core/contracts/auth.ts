import { FutureInstance as Future } from 'fluture';

export type Login = (userInput: {
  email: string,
  password: string,
}) => Future<any, any>;

export type AddUser = (user: {
  _id: string,
  name: string,
  email: string,
  password: string,
}) => Future<any, any>;