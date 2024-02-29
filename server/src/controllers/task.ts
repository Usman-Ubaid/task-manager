import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Task from "../models/Task";

export const taskController = {
  addTask: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.payload.id;
      const { title, description, dueDate } = req.body;

      if (!title || !dueDate) {
        throw new Error("Please fill all the fields");
      }
      const task = new Task({
        title,
        description: description || "",
        dueDate,
        user: userId,
      });

      const savedTask = await task.save();

      return res.status(201).json({ message: "success", task: savedTask });
    } catch (error) {
      next(error);
    }
  },
  getAllTasks: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tasks = await Task.find()
        .populate({ path: "user", select: "_id username" })
        .exec();
      return res.status(200).json({ message: "success", tasks });
    } catch (error) {
      next(error);
    }
  },
  getSingleTask: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { taskId } = req.params;
      if (!mongoose.Types.ObjectId.isValid(taskId)) {
        throw new Error("Invalid task id");
      }

      const task = await Task.findById({ _id: taskId })
        .populate({
          path: "user",
          select: "_id username",
        })
        .exec();

      if (!task) {
        throw new Error("Task not found");
      }

      return res.status(200).json({ message: "success", task });
    } catch (error) {
      next(error);
    }
  },
};
