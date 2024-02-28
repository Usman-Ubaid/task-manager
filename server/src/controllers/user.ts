import { Request, Response } from "express";
import mongoose from "mongoose";
import { createUser } from "../services/user";
import { handleValidationError } from "../utils/validationError";
import User from "../models/User";
import { comparePasswords, generateJWT } from "../services/auth";

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
  loginUser: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: "Please fill all the fields" });
      }

      const user = await User.findOne({ email });

      if (user && (await comparePasswords(password, user.password))) {
        const token = generateJWT(user._id);
        res.status(200).json({
          message: "success",
          user: {
            userId: user._id,
            username: user.username,
            email: user.email,
            token,
          },
        });
      } else {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};
