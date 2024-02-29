import { NextFunction, Request, Response } from "express";
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
};
