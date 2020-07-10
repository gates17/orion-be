
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
      {    
	username: "admin", 
	password: "admin", 
	createdAt: knex.fn.now(), 
	updatedAt: knex.fn.now(), 
	email: "alexandre.lecom@gmail.com"
      }]);
    });
};
