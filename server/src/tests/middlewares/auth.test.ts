import { protect } from "../../middlewares/auth";
import { NextFunction, Request } from "express";

jest.mock("../../services/auth", () => ({
  verifyJWT: jest
    .fn()
    .mockReturnValue({ userId: "mockUserId", email: "mock@gmail.com" }),
}));

describe("protect middleware", () => {
  it("should call next() if a valid token is provided", () => {
    const res = {
      status: jest.fn().mockImplementation((statusCode: number) => ({
        statusCode,
        json: jest.fn(),
      })),
      json: jest.fn(),
    } as any;

    const req = {
      headers: {
        authorization: "Bearer validToken",
      },
    } as Request;

    const next = jest.fn() as NextFunction;

    protect(req, res, next);

    expect(res.status).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
    expect(req.user).toEqual({ userId: "mockUserId", email: "mock@gmail.com" });
  });
});
