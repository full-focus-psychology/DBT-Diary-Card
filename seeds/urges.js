
exports.seed = function(knex, Promise) {
  return knex('urges').del()
    .then(function () {
      return knex('urges').insert([
        {id: 1, user_id: 1, urge: "Drug use"},
        {id: 2, user_id: 1, urge: "Self harm"},
        {id: 3, user_id: 1, urge: "Suicide"}
      ]);
    });
};
