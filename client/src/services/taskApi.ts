import { FormValues } from "../hooks/useForm";
import { getToken } from "../utils/tokenStorage";

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

export const editTask = async (id: number, completed: boolean) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ completed: !completed }),
  });

  return await response.json();
};
