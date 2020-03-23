const express = require('express'); // Get express server up and running

const app = express();

app.get('/', (req, res) => {
  res.send('API Running'); // Sends data to browser
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up and running on Port ${PORT}`);
});
