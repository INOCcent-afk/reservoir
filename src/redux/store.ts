import { configureStore } from "@reduxjs/toolkit";
import AuthUserReducer from "./AuthUser.slice";

const store = configureStore({
  reducer: {
    User: AuthUserReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
