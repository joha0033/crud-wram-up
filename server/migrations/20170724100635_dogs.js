
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dogs', function(table){
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('breed').notNull()
        table.string('color').notNull()
        table.integer('weight').notNull()
        table.integer('owner_id').unsigned()
        table.foreign('owner_id').references('person.id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('dogs')
};
