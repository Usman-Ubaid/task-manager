import mongoose from "mongoose";
import User from "./User";

export interface TaskInterface extends Document {
  title: string;
  description: string;
  priority?: string;
  dueDate: Date;
  completed?: boolean;
  user: mongoose.Schema.Types.ObjectId;
}

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  dueDate: {
    type: Date,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
});

const Task = mongoose.model<TaskInterface>("Task", taskSchema);

export default Task;
