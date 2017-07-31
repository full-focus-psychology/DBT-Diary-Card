
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('urges', (table) => {
    table.increments('id')
    table.integer('user_id')
    table.string('urge')
    table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('urges')
};
