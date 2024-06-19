// server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { findPalindromes } = require('./palindrome'); // Assuming you have a separate module for palindrome logic

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'assets' directory (including Tailwind CSS)
app.use(express.static(path.join(__dirname, 'assets')));

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// POST endpoint to find palindromes in a string
app.post('/find-palindromes', (req, res) => {
  const inputString = req.body.inputString;
  const palindromes = findPalindromes(inputString); // Assuming findPalindromes function is defined
  res.json({ palindromes });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
