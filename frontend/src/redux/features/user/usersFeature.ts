import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../../types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/users`,
  }),
  endpoints: (builder) => ({
    getUserById: builder.query<User, number>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetUserByIdQuery } = usersApi;
