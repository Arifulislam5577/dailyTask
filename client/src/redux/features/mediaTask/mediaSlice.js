import { createSlice } from "@reduxjs/toolkit";
import { createMediaTask, getMediaTask } from "../../services/mediaTaskService";

const initialState = {
  loading: false,
  error: "",
  success: false,
  tasks: [],
};

const mediaTaskSlice = createSlice({
  name: "MediaTask",
  initialState,
  reducers: {
    reset(state, action) {
      state.loading = false;
      state.success = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createMediaTask.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.success = false;
    });

    builder.addCase(createMediaTask.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.success = true;
    });

    builder.addCase(createMediaTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });

    builder.addCase(getMediaTask.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(getMediaTask.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.tasks = action.payload;
    });

    builder.addCase(getMediaTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const mediaTaskReducers = mediaTaskSlice.reducer;
export const { reset } = mediaTaskSlice.actions;
