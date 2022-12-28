import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  loading: false,
  error: "",
  loader: true,
};

const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {},
});

export const authReducers = authSlice.reducer;
