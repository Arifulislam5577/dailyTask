import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import axios from "axios";
import { auth } from "../../config/firebase.config";

const provider = new GoogleAuthProvider();

export const createNewUser = createAsyncThunk(
  "Authentication/createUser",
  async (data, thunkAPI) => {
    try {
      const { name, email, password } = data;
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL:
          "https://www.shareicon.net/data/2016/05/24/770107_man_512x512.png",
      });
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const googleSignIn = createAsyncThunk(
  "Authentication/signinwithgoogle",
  async (data, thunkAPI) => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "Authentication/loginUser",
  async (data, thunkAPI) => {
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logOut = async () => {
  return await signOut(auth);
};

export const userInDB = createAsyncThunk(
  "Authentication/createUserInDb",
  async (token, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `http://localhost:5000/api/v1/user`,
        {},
        config
      );
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
