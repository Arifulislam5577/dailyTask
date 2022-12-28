import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    userEmail: { type: String, required: true, unique: true },
    userImg: { type: String, default: "" },
    userName: { type: String, default: "" },
  },
  { timestamps: true }
);

const userModel = model("user", userSchema);

export default userModel;
