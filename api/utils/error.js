
export const errorHandler = (statusCode, message) => {
  const error = new Error(); // Create a new Error object
  error.statusCode = statusCode; // Set the status code of the error
  error.message = message; // Set the message of the error
  return error; // Throw the error
}