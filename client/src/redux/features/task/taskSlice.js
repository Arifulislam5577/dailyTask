import { createSlice } from "@reduxjs/toolkit";
import { createTask, getTask, updateTask } from "../../services/taskService";
const initialState = {
  loading: false,
  error: "",
  success: false,
  tasks: [],
};

const taskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    reset(state, action) {
      state.loading = false;
      state.success = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTask.pending, (state) => {
      state.loading = true;
      state.success = false;
      state.error = "";
    });

    builder.addCase(createTask.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.success = true;
    });

    builder.addCase(createTask.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    });
    builder.addCase(getTask.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(getTask.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.tasks = action.payload;
    });

    builder.addCase(getTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateTask.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.success = false;
    });

    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.success = true;
    });

    builder.addCase(updateTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });
  },
});

export const taskReducers = taskSlice.reducer;
export const { reset } = taskSlice.actions;
