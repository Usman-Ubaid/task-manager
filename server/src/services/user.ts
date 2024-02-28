import User from "../models/User";
import { generateJWT, hashPassword } from "./auth";

export const createUser = async (
  username: string,
  email: string,
  password: string
) => {
  if (!username || !email || !password) {
    throw new Error("Please fill all the fields.");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists.");
  }

  const hashedPassword = await hashPassword(password);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  const token = generateJWT(newUser._id);

  return {
    status: 201,
    data: {
      message: "User registered successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        token,
      },
    },
  };
};
