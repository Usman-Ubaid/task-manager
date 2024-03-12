import { createContext, useContext } from "react";
import { getAllTasks } from "../services/taskApi";
import { useQuery } from "@tanstack/react-query";

export type Task = {
  _id: number;
  title: string;
  description: string;
  completed: boolean;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
};

type TaskContextValue = {
  tasks: Task[];
};

export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
});

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const query = useQuery({ queryKey: ["tasks"], queryFn: getAllTasks });
  const tasks = query?.data?.tasks;

  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};

export const useTask = () => {
  return useContext(TaskContext);
};
