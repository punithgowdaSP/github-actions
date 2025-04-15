// Importing express module
const express = require('express');

// Creating an instance of an Express app
const app = express();

// Set up a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, Express server running on port 888!');
});

console.log("test");

// Start the server and listen on port 888
app.listen(888, () => {
  console.log('Server is running on http://localhost:888');
});


setInterval(() => {
  console.log('🕒 Server heartbeat: still running every 10 seconds...');
}, 10000);
