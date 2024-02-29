import { Router } from "express";
import { taskController } from "../controllers/task";
import { protect } from "../middlewares/auth";

const router = Router();

router.post("/tasks", protect, taskController.addTask);
router.get("/tasks", protect, taskController.getAllTasks);
router.get("/tasks/:taskId", protect, taskController.getSingleTask);

export default router;
