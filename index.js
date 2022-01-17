const express = require('express');
const app = express();

const root = require('./controllers/root');
const err = require('./middlewares/errors');

const PORT = 3001 || process.env.PORT;
app.use(express.json());

app.use('/', root);
app.use(err);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});