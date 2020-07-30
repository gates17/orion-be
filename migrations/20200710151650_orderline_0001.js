exports.up = function(knex) {  

    return knex.schema.createTableIfNotExists("orderline", function (table) {
        // integer id
        table.increments('id').unsigned().primary(); 
    
        // order id
        table.integer('order_id').unsigned();
        table.foreign('order_id').references('id').inTable('order');
        
        // product id
        table.integer('product_id').unsigned();
        table.foreign('product_id').references('id').inTable('products');

      
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
        table.integer('discount_id').unsigned();
        table.foreign('discount_id').references('id').inTable('discount');;

        //discount_value
        table.float('discount_value');

        // createdAt
        table.dateTime('createdAt').notNullable();

        // updatedAt
        table.dateTime('updatedAt');

        // Updated by user
        table.integer('updatedBy').unsigned();
        table.foreign('updatedBy').references('id').inTable('users');
  
    });

}

exports.down = function(knex) {  
    return knex.schema.dropTableIfExists("orderline");
}

