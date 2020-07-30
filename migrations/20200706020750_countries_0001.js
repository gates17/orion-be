exports.up = function(knex) {  
    
    return knex.schema.createTableIfNotExists("countries", function (table) {
        // integer id
        table.increments('id').unsigned().primary(); 
    
        // name
        table.string('name').unique().notNullable();
    
        // area code
        table.string('area_code');
    
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
    return knex.schema.dropTableIfExists("countries");
}

