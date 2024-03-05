export const saveToken = (token: string) => {
  localStorage.setItem("auth-token", token);
};

export const getToken = () => {
  return localStorage.getItem("auth-token");
};
