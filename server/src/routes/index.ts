import { Router } from "express";
import userRoutes from "./user";
import taskRoutes from "./task";

const router = Router();

router.use("/users", userRoutes);
router.use(taskRoutes);

export default router;
