const express = require('express'); 
const chronicleRoutes = require('./routes/chronicles'); 

// creates the express app 
const app = express(); 

app.listen(8000, () => {
    console.log('listening on port 8000'); 
})

//middleware
app.use(express.json()); 
app.use((req, res, next) => {
    console.log(res.path, req.method); 
    next(); 
})

//routes
app.use('/api/chronicles', chronicleRoutes); 