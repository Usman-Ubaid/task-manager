export const errorMessage = (err: unknown) => {
  let message;
  if (err instanceof Error) {
    message = err.message;
  } else {
    message = "something went wrong";
  }
  return message;
};
