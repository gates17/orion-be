exports.up = function(knex) {  

    return knex.schema.createTableIfNotExists("basket", function (table) {
        // integer id
        table.increments('id').unsigned().primary(); 
    
        // user
        table.string('user_id').unique().notNullable();
        
        // status
        table.string('status');
    });

}

exports.down = function(knex) {  
    return knex.schema.dropTableIfExists("basket");}

