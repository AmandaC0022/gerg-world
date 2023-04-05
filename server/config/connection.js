const mongoose = require("mongoose");

//connects our app to the database 
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI)
  .catch((err) => console.log(err)); 
mongoose.connection.on("connected", (err,res) => {
  console.log("Mongoose is connected."); 
})

module.exports = mongoose.connection;
