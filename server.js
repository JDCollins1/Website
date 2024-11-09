const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Save data to a file or database
  const data = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;
  fs.appendFileSync('submissions.txt', data);

  // Respond to user
  res.send('Thank you for contacting me! Your message has been received.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
