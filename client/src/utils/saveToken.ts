export const saveToken = (token: string) => {
  localStorage.setItem("auth-token", token);
};
