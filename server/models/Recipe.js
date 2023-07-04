const { Schema, model } = require('mongoose'); 
const dateFormat = require('../utils/dateFormat');
const Category = require('./Category'); 

//defines the structure of our Document
const recipeSchema = new Schema({
    title: {
        type: String, 
        required: true, 
    }, 
    category: [String],
    serves: String, 
    cooktime: {
        type: String, 
        required: false
    },
    ingredients: [String],
    cookingsteps: [String],
    imageurl: {
        type: String, 
        required: false
    }, 
    createdAt: {
        type: Date, 
        default: Date.now, 
        get: (timestamp) => dateFormat(timestamp), 
    }
})

//creates a model and then allows us to manipulate the schema 
const Recipe = model('Recipe', recipeSchema); 

module.exports = Recipe; 


