const { Schema, model } = require('mongoose'); 

//defines the structure of our Document
const ingredientsSchema = new Schema({
    name: {
        type: String, 
        required: true, 
    }, 
    type: {
        type: String, 
        required: true
    }, 
    quantity: {
        type: Number, 
        required: true
    }
})

//creates a model and then allows us to manipulate the schema 
const Ingredient = model('Ingredient', ingredientsSchema); 

module.exports = Ingredient; 


