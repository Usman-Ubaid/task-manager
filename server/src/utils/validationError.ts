export function handleValidationError(error: any) {
  const validationErrors = Object.values(error.errors).map(
    (err: any) => err.message
  );
  return validationErrors;
}
