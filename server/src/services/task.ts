import Task from "../models/Task";

export const getTaskById = (id: string) => {
  return Task.findById({ _id: id });
};
