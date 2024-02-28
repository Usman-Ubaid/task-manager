import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDB } from "./config/db";
import routes from "./routes";
import { apiErrorHandler } from "./utils/ApiError";

interface CustomError extends Error {
  statusCode?: number; // Optional property for status code
}

const app: Application = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectDB();

// Routes
app.use("/api", routes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from server" });
});

app.use(apiErrorHandler);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  let statusCode = 500;
  return res.status(statusCode).json({ message: "Internal server error" });
});

export default app;
