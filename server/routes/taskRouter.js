import express from "express";
import {
  createTask,
  getTask,
  updateTask,
} from "../controllers/taskControllers.js";
import { verifyUser } from "../middleware/verifyUser.js";
const taskRouter = express.Router();

taskRouter.route("/").post(verifyUser, createTask).get(verifyUser, getTask);
taskRouter.route("/:taskId").patch(verifyUser, updateTask);
export default taskRouter;
