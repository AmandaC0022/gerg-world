const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//connects our app to the database 
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI)
  .catch((err) => console.log(err)); 

module.exports = mongoose.connection;
