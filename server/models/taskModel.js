import mongoose from "mongoose";

const { Schema, model } = mongoose;

const taskSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      require: true,
      ref: "user",
    },
    task: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const taskModel = model("task", taskSchema);

export default taskModel;
