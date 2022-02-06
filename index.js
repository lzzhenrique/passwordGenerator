const express = require('express');
const cors = require('cors');
const root = require('./controllers/root');
const err = require('./middlewares/errors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(cors({
  origin: 'chrome-extension://gckhpdjepjfehifhnpbpjmndpkjgfgia',
  methods: ['POST'],
}));

app.use('/', root);
app.use(err);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});