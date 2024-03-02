import User from "../../models/User";
import { userExists } from "../../services/user";

describe("useExists function", () => {
  it("should return the user when email exists", async () => {
    const email = "USMAN22@gm.co";
    const mockUser = {
      _id: "65e06cd90cddc64b1917306a",
      username: "mockusername",
      email: "mockemail",
      password: "mockpassword",
      createdAt: "2024-02-29T11:38:45.773Z",
      __v: 0,
    };

    User.findOne = jest.fn().mockResolvedValueOnce(mockUser);

    const result = await userExists(email);
    expect(result).toEqual(mockUser);
    expect(User.findOne).toHaveBeenCalledWith({ email });
  });
});
