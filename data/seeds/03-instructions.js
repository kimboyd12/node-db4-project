
exports.seed = function(knex) {
      return knex('instructions').insert([
        {
          recipe_id: 1,
          step_number: 1,
          step: "Gather your ingredients"
        },
        {
          recipe_id: 1,
          step_number: 2,
          step: "Lay down tortilla flat and pile in the ingredients"
        },
        {
          recipe_id: 1,
          step_number: 3,
          step: "Roll burrito style and enjoy!"
        },
        {
          recipe_id: 2,
          step_number: 1,
          step: "Gather your meatless ingredients"
        },
        {
          recipe_id: 2,
          step_number: 2,
          step: "Lay down tortilla flat and pile in the ingredients, add extra veggies"
        },
        {
          recipe_id: 2,
          step_number: 3,
          step: "Roll burrito style and enjoy your veggie burrito!"
        },
        {
          recipe_id: 3,
          step_number: 1,
          step: "Gather your ingredients"
        },
        {
          recipe_id: 3,
          step_number: 2,
          step: "Grab your tortillas and add your ingredients"
        },
        {
          recipe_id: 3,
          step_number: 3,
          step: "Fold taco style and top with guacamole"
        },
      ]);
    };

