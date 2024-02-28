import mongoose, { Schema, Document } from "mongoose";

export interface UserInterface extends Document {
  username: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: [true, "can't be blank"], unique: true },
  email: { type: String, requried: [true, "can't be blank"], unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model<UserInterface>("User", UserSchema);

export default User;
