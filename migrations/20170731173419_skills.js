
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('skills', (table) => {
    table.increments('id')
    table.integer('user_id')
    table.string('action')
    table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('skills')
};
