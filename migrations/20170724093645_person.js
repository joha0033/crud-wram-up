exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('person', function(table){
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull()
        table.string('password').notNull()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('person')
};
