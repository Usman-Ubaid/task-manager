import { Request, Response, NextFunction } from "express";
import { verifyJWT } from "../services/auth";

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    return res.status(401).json({ message: "No Bearer Token found" });
  }

  const [_, token] = bearer.split(" ");

  if (!token) {
    return res.status(401).json({ message: "No Token found" });
  }

  try {
    const payload = verifyJWT(token);
    if (payload) {
      req.user = payload;
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Not Authorized" });
  }
};
