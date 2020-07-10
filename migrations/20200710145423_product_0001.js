
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists("products", function (table) {
        // integer id
        table.increments(); 
        
        // name
        table.string('name').notNullable();
        
        //price
        table.integer('price_id').notNullable();

        //available stock
        table.bigInteger('stock').notNullable().defaultTo(0);
        
        //taxes
        table.foreign('taxes_id');

        //discount
        table.foreign('discount_id');

        // createdAt
        table.dateTime('createdAt').notNullable();

        // updatedAt
        table.dateTime('updatedAt');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("products");
};
