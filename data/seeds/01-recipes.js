
exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe_name: 'Steak Burrito'},
    {recipe_name: 'Veggie Burrito'},
    {recipe_name: 'Chicken Tacos'}
  ]);
};