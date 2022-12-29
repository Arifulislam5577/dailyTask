import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "../features/auth/authSlice";
import { taskReducers } from "../features/task/taskSlice";
const store = configureStore({
  reducer: {
    auth: authReducers,
    task: taskReducers,
  },
});

export default store;
