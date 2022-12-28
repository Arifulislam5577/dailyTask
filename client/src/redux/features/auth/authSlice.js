import { createSlice } from "@reduxjs/toolkit";
import { createNewUser, loginUser } from "../../services/authService";
const initialState = {
  user: null,
  loading: false,
  error: "",
  loader: true,
};

const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    isLoginUser(state, action) {
      state.user = action.payload;
      state.loader = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.loader = true;
      state.loading = false;
    });

    builder.addCase(createNewUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loader = true;
      state.loading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const authReducers = authSlice.reducer;
export const { isLoginUser } = authSlice.actions;
