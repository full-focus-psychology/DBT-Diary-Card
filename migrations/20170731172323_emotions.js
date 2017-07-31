
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('emotions', (table) => {
    table.increments('id')
    table.integer('user_id')
    table.string('emotion')
    table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('emotions')
};
