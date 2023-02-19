const express = require('express'); 
const chronicleRoutes = require('./routes/chronicles'); 
const PORT = process.env.PORT || 8000;
const db = require('./config/connection');

// creates the express app 
const app = express(); 

//middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log(res.path, req.method); 
    next(); 
})

//routes
app.use('/api/chronicles', chronicleRoutes); 

//connect to db
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
});
  