const mongoose = require("mongoose");
const colors = require("colors");
const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log(`server running on ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = db;
