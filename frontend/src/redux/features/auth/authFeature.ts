import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { JWT, LoginCredentials, RegisterCredentials } from "../../../types";
import { SerializedError } from "@reduxjs/toolkit";

type LoginResponse<T> = {
  data?: T;
  error?: FetchBaseQueryError | SerializedError;
};

type RegisterResponse = {
  data?: any;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/auth`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse<JWT>, LoginCredentials>({
      query: (body) => ({
        url: `/login`,
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterCredentials>({
      query: (body) => ({
        url: `/register`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
