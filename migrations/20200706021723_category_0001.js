exports.up = function(knex) {  
    return knex.schema.createTableIfNotExists("category", function (table) {
        // integer id
        table.increments('id').unsigned().primary(); 
    
        // name
        table.string('name').unique().notNullable();
    
        // migration_file
        table.string('type');

        // parent
        table.integer('category_id');
    
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
    return knex.schema.dropTableIfExists("category");
}

