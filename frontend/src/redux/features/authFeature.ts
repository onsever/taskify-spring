import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { JWT, LoginCredentials, RegisterCredentials } from "../../types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/auth`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<JWT, LoginCredentials>({
      query: (body) => ({
        url: `/login`,
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation<JWT, RegisterCredentials>({
      query: (body) => ({
        url: `/register`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
