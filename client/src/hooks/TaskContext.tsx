import { createContext, useContext, useEffect, useState } from "react";
import { getAllTasks } from "../services/taskApi";

type Task = {
  _id: number;
  title: string;
  description: string;
  completed: boolean;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
};

type TaskContextValue = {
  tasks: Task[];
  updateTasks: (newTask: Task) => void;
};

export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
  updateTasks: () => {},
});

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const updateTasks = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getAllTasks();
      console.log(response.tasks);
      setTasks(response.tasks);
      return response;
    };
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, updateTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  return useContext(TaskContext);
};
