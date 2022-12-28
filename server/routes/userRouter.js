import express from "express";
import { authenticateUser } from "../controllers/userContorllers.js";
import { verifyUser } from "../middleware/verifyUser.js";
const userRouter = express.Router();

userRouter.route("/").post(verifyUser, authenticateUser);

export default userRouter;
