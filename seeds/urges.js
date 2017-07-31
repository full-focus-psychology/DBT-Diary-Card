
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('urges').del()
    .then(function () {
      // Inserts seed entries
      return knex('urges').insert([
        {id: 1, urge: "Drug use"},
        {id: 2, urge: "Self harm"}
        {id: 3, urge: "Suicide"},
      ]);
    });
};
