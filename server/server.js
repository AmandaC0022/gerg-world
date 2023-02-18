const express = require('express'); 

// creates the express app 
const app = express(); 

app.listen(8000, () => {
    console.log('listening on port 8000'); 
})

//routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the app!'}); 
})
