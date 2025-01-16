const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    console.error('Error in async operation:', error);
    res.status(500).send('Internal Server Error');
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  // Replace this with your actual asynchronous logic
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.5; // Simulate success or failure
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Simulated asynchronous operation failed'));
      }
    }, 1000);
  });
}