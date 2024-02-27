import mongoose from "mongoose";
import "dotenv/config";

const MONGODB_URI = process.env.DATABASE_URI;

const connectDB = async () => {
  try {
    if (MONGODB_URI) {
      await mongoose.connect(MONGODB_URI);

      console.log("DB Connected");
    } else {
      console.log("Env variable not defined");
    }
  } catch (error) {
    console.log("Error connecting to db", error);
  }
};

export { connectDB };
