const { Schema, model } = require('mongoose'); 
const dateFormat = require('../utils/dateFormat');

//defines the structure of our Document
const chroniclesSchema = new Schema({
    title: {
        type: String, 
        required: true, 
    }, 
    body: {
        type: String, 
        required: true
    }, 
    createdAt: {
        type: Date, 
        default: Date.now, 
        get: (timestamp) => dateFormat(timestamp), 
    }
})

//creates a model and then allows us to manipulate the schema 
const Chronicle = model('Chronicle', chroniclesSchema); 

module.exports = Chronicle; 


