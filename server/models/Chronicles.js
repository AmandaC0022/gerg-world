const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

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
}, { timestamps: true})

//creates a model and then allows us to manipulate the schema 
module.exports = mongoose.model('Chronicle', chroniclesSchema); 


