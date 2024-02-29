import { Router } from "express";
import { taskController } from "../controllers/task";
import { protect } from "../middlewares/auth";

const router = Router();

router.post("/tasks", protect, taskController.addTask);
router.get("/tasks", protect, taskController.getAllTasks);

export default router;
