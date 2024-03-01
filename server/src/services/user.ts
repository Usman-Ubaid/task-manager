import User from "../models/User";

export const userExists = async (email: string) => {
  return await User.findOne({ email });
};
