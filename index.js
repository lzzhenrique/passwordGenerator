const express = require('express');
const PORT = 3000;
const app = express();
const root = require('./controllers/root');

app.use(express.json());

app.use(root, '/');

app.listen(PORT, () => {
  console.log('app running on port 3000');
});