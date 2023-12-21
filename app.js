const express = require('express');
const { enventsRouter } = require('./src/routes');
const { connect } = require('./src/db/mongodb');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

connect();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('./src/src/uploads'));

app.use('/', enventsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
