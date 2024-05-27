const express = require('express');
const app = express();
const port = 3030;

// Define a simple API endpoint
app.get('/api/v1/hello', (req, res) => {
  res.json({ message: `Hi, This is Server 1: ${port}!` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
