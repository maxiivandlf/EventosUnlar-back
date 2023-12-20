const mongoose = require('mongoose');

const USERDB = process.env.USER_DB;
const PASSWORDDB = process.env.PASS_DB;
const DBNAME = process.env.DATABASE_NAME;

const MONGODB_URI = `mongodb+srv://${USERDB}:${PASSWORDDB}@cluster0.jtpzxxb.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;

async function connect() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('successfully connected to mongoDB');
  } catch (error) {
    console.log(error);
    throw error;
  }
}
module.exports = { connect };
