const mongoose = require("mongoose");

//connects our app to the database 
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
  .catch((err) => console.log(err)); 

module.exports = mongoose.connection;
