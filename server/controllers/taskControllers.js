import taskModel from "../models/taskModel.js";
import asynHandler from "express-async-handler";

export const createTask = asynHandler(async (req, res) => {
  const { user, task } = req.body;

  const newTask = await taskModel.create({ user, task });

  if (!newTask) {
    return res.status(400).json({ message: "Task creation failed" });
  }
  return res.status(201).json({ message: "Task created successfully" });
});

export const getTask = asynHandler(async (req, res) => {
  const { userId, isCompleted } = req.query;
  const tasks = await taskModel.find({
    user: userId,
    isCompleted: isCompleted,
  });
  res.status(200).json(tasks);
});

export const updateTask = asynHandler(async (req, res) => {
  const { task, isCompleted } = req.body;

  const findTask = await taskModel.findByIdAndUpdate(req.params.taskId, {
    task,
    isCompleted,
  });

  if (!findTask) {
    return res.status(404).json({ message: "No Task Found" });
  }
  res.status(200).json({ message: "Task updated successfully" });
});

export const deleteTask = asynHandler(async (req, res) => {
  const findTask = await taskModel.findByIdAndDelete(req.params.taskId);
  res.status(200).json({ message: "Task delete successfully" });
});
