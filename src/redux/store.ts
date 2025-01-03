import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todoSlice";
import { baseApi } from "./api/api";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
