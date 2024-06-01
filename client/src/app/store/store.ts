import { configureStore } from "@reduxjs/toolkit";
import  ceramicSlice  from "./ceramicSlice";
import productSlise from "./productSlise";

export const store = configureStore({
  reducer: {
    ceramicSlice,
    productSlise
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
