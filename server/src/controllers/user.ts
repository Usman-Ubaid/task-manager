import { Request, Response } from "express";
import mongoose from "mongoose";
import { createUser } from "../services/user";
import { handleValidationError } from "../utils/validationError";

export const userController = {
  registerUser: async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;
      const result = await createUser(username, email, password);
      res.status(result.status).json(result.data);
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        const validationErrors = handleValidationError(error);
        return res.status(400).json({ validationErrors });
      } else {
        return res.status(500).json({ message: "Internal server error" });
      }
    }
  },
};
