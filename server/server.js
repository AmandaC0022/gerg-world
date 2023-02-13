const express = require('express'); 

// creates the express app 
const app = express(); 

app.listen(4000, () => {
    console.log('listening on port 4000'); 
})

//routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the app!'}); 
})
