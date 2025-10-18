import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});
