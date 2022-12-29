import { createSlice } from "@reduxjs/toolkit";
import { createNewUser, loginUser, userInDB } from "../../services/authService";
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
      state.loader = true;
      state.error = "";
    });

    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.loader = false;
      state.loading = false;
      state.error = "";
    });

    builder.addCase(createNewUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loader = true;
      state.error = "";
      state.loading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.loader = false;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(userInDB.pending, (state) => {
      state.loader = true;
      state.error = "";
      state.loading = true;
    });

    builder.addCase(userInDB.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.loader = false;
      state.user = action.payload;
    });

    builder.addCase(userInDB.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const authReducers = authSlice.reducer;
export const { isLoginUser } = authSlice.actions;
