import express from "express";
import {
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/taskControllers.js";
import { verifyUser } from "../middleware/verifyUser.js";
const taskRouter = express.Router();

taskRouter.route("/").post(verifyUser, createTask).get(verifyUser, getTask);
taskRouter
  .route("/:taskId")
  .patch(verifyUser, updateTask)
  .delete(verifyUser, deleteTask);
export default taskRouter;
