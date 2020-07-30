exports.up = function(knex) {    
    return knex.schema.createTableIfNotExists("users", function (table) {
        // integer id
        table.increments('id').unsigned().primary(); 

        // name
        table.string('username').unique().notNullable();

        // password
        table.string('password');

        // createdAt
        table.dateTime('createdAt').notNullable();

        // updatedAt
        table.dateTime('updatedAt');

        //email
        table.string('email').unique().notNullable();;
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
}

