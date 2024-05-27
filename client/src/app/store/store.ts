import { configureStore } from "@reduxjs/toolkit";
import  ceramicSlice  from "./ceramicSlice";

export const store = configureStore({
  reducer: {
    ceramicSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
