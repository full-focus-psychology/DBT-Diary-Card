
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('alcoholAndDrugs', (table) => {
    table.increments('id')
    table.integer('user_id')
    table.string('type')
    table.integer('amount')
    table.string('specify_drug')
  })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('alcoholAndDrugs')
};
