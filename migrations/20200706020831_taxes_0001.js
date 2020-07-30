exports.up = function(knex) {  
    return knex.schema.createTableIfNotExists("taxes", function (table) {
        // integer id
        table.increments('id').unsigned().primary(); 

        // name
        table.string('name');
        
        // country
        table.integer('country_id').unsigned();
        table.foreign('country_id').references('id').inTable('countries');

        // value
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
    return knex.schema.dropTableIfExists("taxes");
}

