const express = require('express');
const app = express();
const port = 3007;  // Port where the application will listen

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');  // Respond with "Hello World!"
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});