const express = require('express');
const { enventsRouter } = require('./src/routes');
const { connect } = require('./src/db/mongodb');

const PORT = process.env.PORT || 3000;

connect();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', enventsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
