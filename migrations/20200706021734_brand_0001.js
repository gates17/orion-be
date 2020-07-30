exports.up = function(knex) {  
    return knex.schema.createTableIfNotExists("brand", function (table) {
        // integer id
        table.increments('id').unsigned().primary(); 
    
        // name
        table.string('name').notNullable();
        
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
    return knex.schema.dropTableIfExists("brand");
}

