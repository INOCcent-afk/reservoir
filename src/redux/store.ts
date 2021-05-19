import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./Shop.slice";

const store = configureStore({
  reducer: {
    cart: shopReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
