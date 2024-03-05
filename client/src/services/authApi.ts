import { FormValues } from "../hooks/useForm";

const BASE_URL = "http://localhost:5000/api/users";

export const loginUser = async (formValues: FormValues) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formValues.email,
      password: formValues.password,
    }),
  });

  return response.json();
};
export const registerUser = async (formValues: FormValues) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
    }),
  });

  return response.json();
};
