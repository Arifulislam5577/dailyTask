import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createMediaTask = createAsyncThunk(
  "MediaTask/CreateTask",
  async (taskInfo, thunkAPI) => {
    const { task, image } = taskInfo;
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      };

      const user = thunkAPI.getState().auth.user._id;

      const { data } = await axios.post(
        `https://dailytask-server.vercel.app/api/v1/mediatask`,
        { task, user, image },
        config
      );
      return data;
    } catch (error) {
      console.log(error);
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

export const getMediaTask = createAsyncThunk(
  "MediaTask/getTask",
  async (taskInfo, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      };
      const user = thunkAPI.getState().auth.user._id;
      const { data } = await axios.get(
        `https://dailytask-server.vercel.app/api/v1/mediatask?user=${user}`,
        config
      );
      return data;
    } catch (error) {
      console.log(error);
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
