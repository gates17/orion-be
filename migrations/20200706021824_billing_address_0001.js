exports.up = function(knex){

    knex.schema.hasTable('billing_address').then(function(exists) {
        if (!exists) {
          return knex.schema.createTable('billing_address', function(table) {
            // integer id
            table.increments('id').unsigned().primary(); 

            // Client profile id
            table.integer('profile_id').unsigned();
            table.foreign('profile_id').references('id').inTable('profile');        
    
            // name
            table.text('street_name').notNullable();
        
            // area code
            table.string('area_code');
        
            // city
            table.string('city').notNullable();
    
            // country
            table.integer('country_id').notNullable();
    
            // district
            table.string('district');
    
            // createdAt
            table.dateTime('createdAt').notNullable();
    
            // updatedAt
            table.dateTime('updatedAt').notNullable();

            // Updated by user
            table.integer('updatedBy').unsigned();
            table.foreign('updatedBy').references('id').inTable('users');

          });
        }
      });
 

}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("billing_address");

}


