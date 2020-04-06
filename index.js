// import express (after npm install express)
const express = require('express');

const app = express();

// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello World');
});

// make the server listen to requests
app.listen(8080, () => {
	// This block runs when listen is successfully set and the process is running.
  console.log(`Server running at: http://localhost:8080/`);
});