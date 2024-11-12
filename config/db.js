const mongoose = require("mongoose");

require("dotenv").config();

const uri = process.env.MONGO_ADDRESS;

mongoose.set("strictQuery", true);
mongoose.connect(uri).then(() => {
  console.log("mongdb is connected");
});
