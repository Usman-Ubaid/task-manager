import { Router } from "express";
import { taskController } from "../controllers/task";
import { protect } from "../middlewares/auth";

const router = Router();

router.post("/tasks", protect, taskController.addTask);

export default router;
