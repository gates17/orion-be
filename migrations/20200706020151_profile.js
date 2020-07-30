exports.up = function(knex) {  
    return knex.schema.createTableIfNotExists("profile", function (table) {
        // integer id
        table.increments('id').unsigned().primary(); 
        
        // name
        table.string('name').notNullable();

        // last name
        table.string('last name').notNullable();

        // tax number
        table.integer('tax number').unique();

        //area code
        table.string('area code');

        // phone number
        table.integer('phone number').unique().notNullable();

        //date of birth
        table.date('date_of_birth');

        // createdAt
        table.dateTime('createdAt').notNullable();

        // updatedAt
        table.dateTime('updatedAt');

        // Updated by user
        table.integer('updatedBy').unsigned();
        table.foreign('updatedBy').references('id').inTable('users');
          
    })
}

exports.down = function(knex) {   
    return knex.schema.dropTableIfExists("profile");
}

