const { Schema, model } = require('mongoose'); 
const dateFormat = require('../utils/dateFormat');

//defines the structure of our Document
const categorySchema = new Schema({
    name: {
        type: String, 
        required: true, 
    }
})

//creates a model and then allows us to manipulate the schema 
const Category = model('Category', categorySchema); 

module.exports = Category; 


