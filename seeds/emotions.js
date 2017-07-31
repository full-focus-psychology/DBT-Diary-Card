
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('emotions').del()
    .then(function () {
      // Inserts seed entries
      return knex('emotions').insert([
        {id: 1, emotion: "Sadness"},
        {id: 2, emotion: "Shame"}
        {id: 3, emotion: "Anger"},
        {id: 4, emotion: "Joy"},
        {id: 5, emotion: "Fear"},
      ]);
    });
};
