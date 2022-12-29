import express from "express";
import {
  createMediaTask,
  getMediaTask,
} from "../controllers/mediaControllers.js";
import { verifyUser } from "../middleware/verifyUser.js";
const mediaRouter = express.Router();

mediaRouter
  .route("/")
  .post(verifyUser, createMediaTask)
  .get(verifyUser, getMediaTask);

export default mediaRouter;
