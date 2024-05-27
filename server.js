const express = require('express');
const app = express();
const port = 3030;

// Define a simple API endpoint
app.get('/api/v1/hello', (req, res) => {
  res.status(200).json({ message: `Hi, This is Server 1: ${port}!` });
});

app.get('/health-check', (req, res) => {
  res.status(200).json({ message: `Health Check 1: ${port}!` });
});

app.get('*', (req, res) => {
  res.status(200).json({ message: `* Executed: ${port}!` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
