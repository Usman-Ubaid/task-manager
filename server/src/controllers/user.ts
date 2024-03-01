import { NextFunction, Request, Response } from "express";
import User from "../models/User";
import { comparePasswords, generateJWT, hashPassword } from "../services/auth";
import { ApiError } from "../utils/ApiError";
import { userExists } from "../services/user";

export const userController = {
  registerUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, email, password } = req.body;

      if (!username || !email || !password) {
        throw new ApiError("Please fill all the fields.", 400);
      }

      const existingUser = await userExists(email);

      if (existingUser) {
        throw new ApiError("User already exists.", 400);
      }

      const hashedPassword = await hashPassword(password);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      await newUser.save();

      return res.status(201).json({
        message: "User registered successfully",
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        },
      });
    } catch (error) {
      next(error);
    }
  },
  loginUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new ApiError("Please fill all the fields", 400);
      }

      const user = await userExists(email);

      if (user && (await comparePasswords(password, user.password))) {
        const payload = {
          id: user._id,
          email: user.email,
        };

        const token = generateJWT(payload);

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
        throw new ApiError("Invalid Credentials", 400);
      }
    } catch (error) {
      next(error);
    }
  },
};
