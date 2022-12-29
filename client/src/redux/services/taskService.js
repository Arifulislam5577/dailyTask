import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createTask = createAsyncThunk(
  "Task/CreateTask",
  async (task, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      };

      const user = thunkAPI.getState().auth.user._id;

      const { data } = await axios.post(
        `http://localhost:5000/api/v1/task`,
        { task, user },
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

export const getTask = createAsyncThunk(
  "Task/getTask",
  async (task, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      };

      const user = thunkAPI.getState().auth.user._id;

      const { data } = await axios.get(
        `http://localhost:5000/api/v1/task?userId=${user}&isCompleted=${task}`,
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
export const updateTask = createAsyncThunk(
  "Task/updateTask",
  async (taskData, thunkAPI) => {
    const { id, task, isCompleted } = taskData;
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      };

      const { data } = await axios.patch(
        `http://localhost:5000/api/v1/task/${id}`,
        {
          task,
          isCompleted,
        },
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

export const deleteTask = createAsyncThunk(
  "Task/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      };

      const { data } = await axios.delete(
        `http://localhost:5000/api/v1/task/${taskId}`,
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
