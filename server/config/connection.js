const mongoose = require("mongoose");
const db = mongoose.connection; 

//connects our app to the database 
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gregsworld', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); 
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports = mongoose.connection;
