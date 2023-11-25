const express = require('express');
const { enventsRouter } = require('./src/routes');

const app = express();

app.use(express.json());
app.use('/', enventsRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
