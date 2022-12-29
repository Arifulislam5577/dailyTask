import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "../features/auth/authSlice";
import { mediaTaskReducers } from "../features/mediaTask/mediaSlice";
import { taskReducers } from "../features/task/taskSlice";
const store = configureStore({
  reducer: {
    auth: authReducers,
    task: taskReducers,
    mediaTask: mediaTaskReducers,
  },
});

export default store;
