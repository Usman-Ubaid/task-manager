import User from "../models/User";

export const createUser = async (
  username: string,
  email: string,
  password: string
) => {
  if (!username || !email || !password) {
    return { status: 400, data: { error: "Please fill all the fields." } };
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return { status: 400, data: { error: "User already exists" } };
  }

  const newUser = new User({ username, email, password });
  await newUser.save();

  return {
    status: 201,
    data: {
      message: "User registered successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    },
  };
};
