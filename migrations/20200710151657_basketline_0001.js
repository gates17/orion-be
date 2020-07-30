exports.up = function(knex) {  

    return knex.schema.createTableIfNotExists("basketline", function (table) {
        // integer id
        table.increments('id').unsigned().primary(); 
    
        //order
        table.string('order_id').unique().notNullable();
    
        // product
        table.string('product_id');
    
        //quantity
        table.integer('quantity').notNullable();

        //price
        table.integer('price_id').notNullable();

        //total
        table.float('total').notNullable();

        //taxes
        table.float('taxes').notNullable();

        //total with taxes
        table.float('total_with_taxes').notNullable();

        //discount
        table.float('discount');
        
        // createdAt
        table.dateTime('createdAt').notNullable();
    });

}

exports.down = function(knex) {  
    return knex.schema.dropTableIfExists("basketline");
}

