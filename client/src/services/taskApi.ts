import { FormValues } from "../hooks/useForm";
import { getToken } from "../utils/tokenStorage";

type TaskData = {
  title?: string;
  description?: string;
  priority?: string;
  dueDate?: string;
  completed?: boolean;
};

const BASE_URL = "http://localhost:5000/api/tasks";
const token = getToken();

export const addTaskApi = async (formValues: FormValues) => {
  const response = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formValues),
  });

  return response.json();
};

export const getAllTasks = async () => {
  const response = await fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};

export const getSingleTask = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};

export const editTask = async (id: number, taskData: TaskData) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });

  return await response.json();
};

export const deleteTask = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};
