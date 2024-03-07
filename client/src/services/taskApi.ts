import { FormValues } from "../hooks/useForm";
import { getToken } from "../utils/tokenStorage";

const token = getToken();

export const addTaskApi = async (formValues: FormValues) => {
  const response = await fetch(`http://localhost:5000/api/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formValues),
  });

  return response.json();
};
