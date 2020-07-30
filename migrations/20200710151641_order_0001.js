exports.up = function(knex) {  

    return knex.schema.createTableIfNotExists("order", function (table) {
        table.increments('id').unsigned().primary(); 
        
        // name
        table.string('user_id').unique().notNullable();
    
        // migration_file
        table.string('status');
    
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
    return knex.schema.dropTableIfExists("order");
}

