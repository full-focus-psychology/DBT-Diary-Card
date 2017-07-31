
exports.seed = function(knex, Promise) {
  return knex('emotions').del()
    .then(function () {
      return knex('emotions').insert([
        {id: 1, user_id: 1, emotion: "Sadness"},
        {id: 2, user_id: 1, emotion: "Shame"},
        {id: 3, user_id: 1, emotion: "Anger"},
        {id: 4, user_id: 1, emotion: "Joy"},
        {id: 5, user_id: 1, emotion: "Fear"}
      ]);
    });
};
