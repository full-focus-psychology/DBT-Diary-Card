
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('urges', (table) => {
    table.increments('id')
    table.integer('user_id')
    table.string('urge')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('urges')
};
