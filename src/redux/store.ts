import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./Shop.slice";
import postsReducer from "./Posts.slice";

const store = configureStore({
  reducer: {
    cart: shopReducer,
    posts: postsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
