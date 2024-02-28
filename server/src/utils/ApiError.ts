import { ErrorRequestHandler } from "express";

export const apiErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  return res.status(400).json({ error: error.message });
};
