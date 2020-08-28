
exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("recipe_name", 128).notNull().unique()
    })

    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("name", 128).notNull().unique()
    })

    await knex.schema.createTable("instructions", (table) => {
        table.increments()
        table.integer('step_number').unsigned().notNull()
        table.text('step', 300).notNull()
        table.integer('recipe_id')
            .unsigned()
            .notNull()
            .references("id")
            .inTable("recipes")
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })

    await knex.schema.createTable("ingredients_instructions", (table) => {
        table.integer('ingredient_id')
            .notNull()
            .references('id')
            .inTable('ingredients')
        table.integer('recipe_id')
            .notNull()
            .references('id')
            .inTable('recipes')
        table.float('quantity', 100)
            .notNull()
            .unsigned()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("ingredients_instructions")
    await knex.schema.dropTableIfExists("instructions")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};
