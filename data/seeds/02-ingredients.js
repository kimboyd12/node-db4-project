
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {name: 'Steak'},
        {name: 'Onions'},
        {name: 'Tortilla'},
        {name: 'Guacamole'},
        {name: 'Rice'},
        {name: 'Beans'},
        {name: 'Chicken'}
      ]);
    };

