type User = {
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
};

export enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export enum TaskPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

type Task = {
  taskId: number;
  title: string;
  description: string;
  status: TaskStatus;
  dueDate: string;
  priority: TaskPriority;
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

type JWTReturn = {
  userId: number;
  sub: string;
  iat: number;
  exp: number;
};

export type {
  User,
  Task,
  JWT,
  LoginCredentials,
  RegisterCredentials,
  ErrorResponse,
  JWTReturn,
};
