const { Schema, model } = require('mongoose'); 

//defines the structure of our Document
const chroniclesSchema = new Schema({
    title: {
        type: String, 
        required: true, 
    }, 
    body: {
        type: String, 
        required: true
    }
}, { timestamps: true })

//creates a model and then allows us to manipulate the schema 
const Chronicle = model('Chronicle', chroniclesSchema); 

module.exports = Chronicle; 


