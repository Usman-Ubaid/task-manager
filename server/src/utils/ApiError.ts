import { ErrorRequestHandler } from "express";

export class ApiError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const apiErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  return res.status(error.statusCode).json({ error: error.message });
};
