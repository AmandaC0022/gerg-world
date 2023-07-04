const { Schema, model } = require('mongoose'); 
const dateFormat = require('../utils/dateFormat');

//defines the structure of our Document
const cookingstepsSchema = new Schema({
    step: {
        type: String, 
        required: true, 
    }
})

//creates a model and then allows us to manipulate the schema 
const Cookingsteps = model('Cookingsteps', cookingstepsSchema); 

module.exports = Cookingsteps; 


