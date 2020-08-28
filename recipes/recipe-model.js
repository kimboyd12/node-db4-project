// - `getRecipes()`: should return a list of all recipes in the database.
// `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

const db = require("../data/config");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes() {
    return db("recipes")
}

function getShoppingList(recipeId) {
    return db('ingredients_instructions as iI')
        .join('ingredients', 'ingredients.id', 'iI.ingredient_id')
        .where('iI.recipe_id', recipeId)
        .select('ingredients.name', 'iI.quantity')
}




function getInstructions(recipeId) {
    return db('instructions as i')
        .where('i.recipe_id', recipeId)
        .orderBy('i.step_number')
        .select('i.step_number as Step', 'i.step as Instruction')
}
