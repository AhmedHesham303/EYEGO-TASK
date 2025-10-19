import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    users: userReducer,
  },
});
