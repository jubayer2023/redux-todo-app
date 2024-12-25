import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todos"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }

        return {
          url: "/tasks",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todos"],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        // console.log("Inside base api", data);

        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todos"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/task/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todos"],
    }),
    updateTodo: builder.mutation({
      query: (todoData) => {
        console.log("todoData from api => ", todoData);
        return {
          url: `/task/${todoData.id}`,
          method: "PUT",
          body: todoData.data,
        };
      },
      invalidatesTags: ["todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = baseApi;
