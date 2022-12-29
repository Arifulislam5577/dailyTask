import mongoose from "mongoose";

const { Schema, model } = mongoose;

const mediaSchema = new Schema(
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
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const mediaModel = model("mediaTask", mediaSchema);

export default mediaModel;
