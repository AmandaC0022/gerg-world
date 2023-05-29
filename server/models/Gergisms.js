const { Schema, model } = require('mongoose'); 
const dateFormat = require('../utils/dateFormat');

//defines the structure of our Document
const gergismSchema = new Schema({
    phrase: {
        type: String, 
        required: true, 
    }, 
    createdAt: {
        type: Date, 
        default: Date.now, 
        get: (timestamp) => dateFormat(timestamp), 
    }
})

//creates a model and then allows us to manipulate the schema 
const Gergism = model('Gergism', gergismSchema); 

module.exports = Gergism; 


