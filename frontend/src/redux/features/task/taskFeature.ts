import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store.ts";
import { Task } from "../../../types";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/tasks`,
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
    getTasks: builder.query<Task[], void>({
      query: () => `/all`,
    }),
    getAllTasksByUserId: builder.query<Task[], string>({
      query: (userId) => `/all/${userId}`,
    }),
    getTaskById: builder.query<Task, string>({
      query: (id) => `/${id}`,
    }),
    createTask: builder.mutation<Task, Partial<Task>>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
    }),
    deleteTask: builder.mutation<Task, string>({
      query: (taskId) => ({
        url: `/${taskId}`,
        method: "DELETE",
      }),
    }),
    updateTask: builder.mutation<Task, Partial<Task>>({
      query: (body) => ({
        url: `/${body.taskId}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
  useGetAllTasksByUserIdQuery,
  useDeleteTaskMutation,
} = taskApi;
