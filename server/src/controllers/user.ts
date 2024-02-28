import { NextFunction, Request, Response } from "express";
import { createUser } from "../services/user";
import User from "../models/User";
import { comparePasswords, generateJWT } from "../services/auth";

export const userController = {
  registerUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, email, password } = req.body;
      const result = await createUser(username, email, password);
      res.status(result.status).json(result.data);
    } catch (error) {
      next(error);
    }
  },
  loginUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new Error("Please fill all the fields");
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
        throw new Error("Invalid Credentials");
      }
    } catch (error) {
      next(error);
    }
  },
};
