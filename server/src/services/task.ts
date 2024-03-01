import Task from "../models/Task";

export const getTaskById = async (id: string) => {
  return await Task.findById({ _id: id });
};
