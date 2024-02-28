import mongoose, { Schema, Document } from "mongoose";

const validateEmail = function (email: string) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

export interface UserInterface extends Document {
  username: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    requried: [true, "Email is required"],
    unique: true,
    validate: [validateEmail, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 8,
  },
  createdAt: { type: Date, default: Date.now() },
});

const User = mongoose.model<UserInterface>("User", UserSchema);

export default User;
