const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    RecipeName: String,
    Ingredients: String,
    Size: Number,
    Time: Number,
    Instructions: String,
    Coffee: Boolean,
    Matcha: Boolean,
    Image: String
});

module.exports = mongoose.model(
    'recipe', RecipeSchema, 'Recipes');