const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

mongoose
  .connect(MONGODB_URL, {
    dbName: DB_NAME,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.log(`DB ERROR: ${error}`);
  });
