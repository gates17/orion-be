
exports.up = function(knex) {
    knex.schema.createTableIfNotExists("knex_migrations", function (table) {
        table.increments(); // integer id
    
        // name
        table.string('tablename').unique().notNullable();
    
        // migration_file
        table.string('filename');
    
        // createdAt
        table.dateTime('createdAt').notNullable();
    });

}


exports.down = function(knex) {
    knex.schema.dropTableIfExists('knex_migrations');
}


