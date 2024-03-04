import { userController } from "../../controllers/user";
import { Request, Response, NextFunction } from "express";
import { userExists } from "../../services/user";
import { hashPassword } from "../../services/auth";
import User from "../../models/User";
import { ApiError } from "../../utils/ApiError";

jest.mock("../../services/auth", () => ({
  hashPassword: jest.fn(),
}));

jest.mock("../../models/User");

describe("registerUser API", () => {
  const createMockResponse = (): Response => {
    const res: Partial<Response> = {};

    res.status = jest.fn().mockReturnValue(res);

    res.json = jest.fn().mockReturnValue(res);

    return res as Response;
  };

  let mockReq: Request;
  let mockResponse: Response;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockReq = { body: {} } as Request;
    mockResponse = createMockResponse();
    mockNext = jest.fn() as NextFunction;
  });

  it("should successfully register a new user", async () => {
    const username = "testUser";
    const email = "test@example.com";
    const password = "password123";

    mockReq.body = { username, email, password };
    (User as unknown as jest.Mock).mockImplementation(() => ({
      save: jest.fn().mockResolvedValue({ _id: 1, username, email }),
    }));

    await userController.registerUser(mockReq, mockResponse, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    // expect(mockResponse.json).toHaveBeenCalledWith({
    //   message: "User registered successfully",
    //   user: {
    //     id: 1,
    //     username: "testUser",
    //     email: "test@example.com",
    //   },
    // });
  });

  it("should throw an error if required fields are missing", async () => {
    mockReq.body = {};

    await userController.registerUser(mockReq, mockResponse, mockNext);

    expect(mockNext).toHaveBeenCalledWith(
      new ApiError("Please fill all the fields.", 400)
    );
  });
});
