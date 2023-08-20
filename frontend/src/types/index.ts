type User = {
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
};

type Task = {
  taskId: number;
  title: string;
  description: string;
  status: string;
  dueDate: string;
};

type JWT = {
  accessToken: string;
  tokenType: string;
};

type LoginCredentials = {
  usernameOrEmail: string;
  password: string;
};

type RegisterCredentials = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

type ErrorResponse = {
  message: string;
  statusCode: number;
  path: string;
};

export type {
  User,
  Task,
  JWT,
  LoginCredentials,
  RegisterCredentials,
  ErrorResponse,
};
