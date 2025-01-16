# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous route handlers.  The `bug.js` file showcases the problematic code, where an asynchronous operation within a route handler lacks proper error handling.  This can lead to application crashes or unexpected behavior without any informative error messages.

The `bugSolution.js` file provides the corrected code, demonstrating how to properly handle potential errors using `.catch()` to gracefully manage failures and provide informative responses to clients.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.  Observe that the server starts, but if the `someAsyncOperation()` function throws an error, there's no indication of the failure.
4. Run `node bugSolution.js`.  Notice the improved error handling; any errors are now caught, logged, and responded to appropriately.

## Key Learning

Always handle potential errors within asynchronous operations in your Express.js routes.  Failing to do so can result in hidden bugs and unreliable application behavior.