export type Login = (userInput: {
  email: string,
  password: string,
}) => Promise<any>;

export type AddUser = (user: {
  _id: string,
  name: string,
  email: string,
  password: string,
}) => Promise<any>;