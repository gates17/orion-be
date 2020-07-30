
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists("products", function (table) {
        // integer id
        table.increments('id').unsigned().primary(); 
        
        // name
        table.string('name').notNullable();
        
        //price
        table.integer('price_id').notNullable().defaultTo(0);

        //available stock
        table.bigInteger('stock').notNullable().defaultTo(0);
        
        //taxes
        table.integer('taxes_id').unsigned();
        table.foreign('taxes_id').references('id').inTable('taxes');

        //discount
        table.integer('discount_id').unsigned();
        table.foreign('discount_id').references('id').inTable('discount');

        // createdAt
        table.dateTime('createdAt').notNullable();

        // updatedAt
        table.dateTime('updatedAt');

        // Updated by user
        table.integer('updatedBy').unsigned();
        table.foreign('updatedBy').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("products");
};
