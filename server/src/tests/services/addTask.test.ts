import { getTaskById } from "../../services/task";
import Task from "../../models/Task";

describe("getTaskById function", () => {
  it("should return the task with the given ID", async () => {
    const taskId = "65e08dc90bf4d7443cd77ca7";
    const mockTask = {
      _id: taskId,
      title: "Updated Task",
      description: "This is a new task and updated",
      priority: "Medium",
      dueDate: new Date("2024-03-15T00:00:00.000Z"),
      completed: true,
      user: "65e06cd90cddc64b1917306a",
      createdAt: new Date("2024-02-29T13:59:37.632Z"),
      updatedAt: new Date("2024-02-29T13:59:37.632Z"),
      __v: 0,
    };

    Task.findById = jest.fn().mockResolvedValue(mockTask);

    const result = await getTaskById(taskId);

    expect(result).toEqual(mockTask);
    expect(Task.findById).toHaveBeenCalledWith({ _id: taskId });
  });

  it("should return null with the invalid ID", async () => {
    const taskId = "65e08dc90bf4d7443cd77ca";
    const mockTask = null;

    Task.findById = jest.fn().mockResolvedValue(mockTask);

    const result = await getTaskById(taskId);

    expect(result).toEqual(mockTask);
    expect(Task.findById).toHaveBeenCalledWith({ _id: taskId });
  });
});
