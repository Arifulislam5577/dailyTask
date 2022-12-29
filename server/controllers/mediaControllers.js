import mediaModel from "../models/MediaModel.js";
import asynHandler from "express-async-handler";
import { uplaodImg } from "../utils/uploadImg.js";

export const createMediaTask = asynHandler(async (req, res) => {
  const { user, task, image } = req.body;
  const uploadedImg = await uplaodImg(image);
  const newTask = await mediaModel.create({ user, task, image: uploadedImg });
  if (!newTask) {
    return res.status(400).json({ message: "Task creation failed" });
  }
  return res.status(201).json({ message: "Task created successfully" });
});

export const getMediaTask = asynHandler(async (req, res) => {
  const { user } = req.query;
  const tasks = await mediaModel.find({
    user: user,
  });
  res.status(200).json(tasks);
});
