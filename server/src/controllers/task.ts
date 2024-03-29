import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Task from "../models/Task";
import { ApiError } from "../utils/ApiError";
import { getTaskById } from "../services/task";

export const taskController = {
  addTask: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.payload.id;
      const { title, description, dueDate } = req.body;

      if (!title || !dueDate) {
        throw new ApiError("Please fill all the fields", 400);
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
        throw new ApiError("Invalid task id", 400);
      }

      const task = await getTaskById(taskId);

      if (!task) {
        throw new ApiError("Task Not Found", 404);
      }

      await task.populate({
        path: "user",
        select: "_id username",
      });

      return res.status(200).json({ message: "success", task });
    } catch (error) {
      next(error);
    }
  },
  editTask: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { taskId } = req.params;
      const { title, description, priority, dueDate, completed } = req.body;

      if (!mongoose.Types.ObjectId.isValid(taskId)) {
        throw new ApiError("Invalid task id", 400);
      }

      const task = await getTaskById(taskId);

      if (!task) {
        throw new ApiError("Task Not Found", 404);
      }

      if (title) {
        task.title = title;
      }
      if (description) {
        task.description = description;
      }
      if (priority) {
        task.priority = priority;
      }
      if (dueDate) {
        task.dueDate = dueDate;
      }
      if (completed !== undefined) {
        task.completed = completed;
      }

      const updatedTask = await task.save();

      res
        .status(200)
        .json({ message: "Task updated successfully", task: updatedTask });
    } catch (error) {
      next(error);
    }
  },
  deleteTask: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { taskId } = req.params;

      if (!mongoose.Types.ObjectId.isValid(taskId)) {
        throw new ApiError("Invalid task id", 400);
      }

      const task = await getTaskById(taskId);

      if (!task) {
        throw new ApiError("Task Not Found", 404);
      }

      await Task.deleteOne({ _id: taskId });
      res.status(200).json({ message: "Task deleted successfully", task });
    } catch (error) {
      next(error);
    }
  },
};
