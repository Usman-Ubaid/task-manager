import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Get all users" });
});

router.post("/register", (req: Request, res: Response) => {
  res.status(201).json({ message: "Create a new user" });
});

export default router;
