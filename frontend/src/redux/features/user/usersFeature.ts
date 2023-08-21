import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../../types";
import { RootState } from "../../store.ts";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/users`,
    prepareHeaders: (headers, { getState }: { getState: () => RootState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("ContentType", "application/json");
      headers.set("AccessControlAllowOrigin", "*");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserById: builder.query<User, number>({
      query: (id) => `/${id}`,
    }),
    updateUserById: builder.mutation<User, { id: number; data: User }>({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useGetUserByIdQuery, useUpdateUserByIdMutation } = usersApi;
