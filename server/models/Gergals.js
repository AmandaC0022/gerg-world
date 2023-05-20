const { Schema, model } = require('mongoose'); 
const dateFormat = require('../utils/dateFormat');

//defines the structure of our Document
const gergalSchema = new Schema({
    word: {
        type: String, 
        required: true, 
    }, 
    definition: {
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
const Gergal = model('Gergal', gergalSchema); 

module.exports = Gergal; 


