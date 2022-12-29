import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import taskRouter from "./routes/taskRouter.js";
dotenv.config();
const app = express();

// DEFAULT MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());

// DATABASE CONNECTION
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGODB_URL, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`Database connected`);
  }
});

// ALL ROUTES
app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);

// APP STARTED
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(
      `App is running on ${process.env.NODE_ENV} mode at port ${PORT}`
    );
  }
});
