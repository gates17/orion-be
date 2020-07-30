exports.up = function(knex) {  
    return knex.schema.createTableIfNotExists("discount", function (table) {
        // integer id
        table.increments('id').unsigned().primary(); 
    
        // name
        table.string('type');
    
        // discount value
        table.float('value');

        // createdAt
        table.dateTime('createdAt').notNullable();

        // updatedAt
        table.dateTime('updatedAt').notNullable();
                
        // Updated by user
        table.integer('updatedBy').unsigned();
        table.foreign('updatedBy').references('id').inTable('users');
                
    });

}


exports.down = function(knex) {
    return knex.schema.dropTableIfExists("discount");
}

