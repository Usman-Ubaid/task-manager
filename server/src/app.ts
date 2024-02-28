import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDB } from "./config/db";
import routes from "./routes";

// Create Express application
const app: Application = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectDB();

// Routes
app.use("/", (req, res) => {
  res.status(200).json({ message: "Hello from server" });
});

app.use("/api", routes);

export default app;
