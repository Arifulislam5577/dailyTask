import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import taskRouter from "./routes/taskRouter.js";
import mediaRouter from "./routes/mediaRouter.js";
dotenv.config();
const app = express();

// DEFAULT MIDDLEWARE
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

// CLOUDINARY SETUP
cloudinary.config({
  cloud_name: process.env.CLOUDE_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.SECRET_KEY,
});

// ALL ROUTES
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);
app.use("/api/v1/mediatask", mediaRouter);

// DATABASE CONNECTION

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGODB_URL, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`Database connected`);
  }
});

// APP STARTED
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(
      `App is running on ${process.env.NODE_ENV} mode at port ${PORT}`
    );
  }
});
