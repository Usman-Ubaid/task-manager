import { Router, Request, Response } from "express";
import { userController } from "../controllers/user";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Get all users" });
});

router.post("/register", userController.registerUser);

export default router;
