
exports.seed = function(knex, Promise) {
  return knex('skills').del()
    .then(function () {
      return knex('skills').insert([
        {id: 1, user_id: 1, action: "Didn't think about and didn't use"},
        {id: 2, user_id: 1, action: "Thought about, didn't use, didn't want to"},
        {id: 3, user_id: 1, action: "Thought about, didn't use, but wanted to"},
        {id: 4, user_id: 1, action: "Tried, but couldn't use them"},
        {id: 5, user_id: 1, action: "Tried, could do them, but they didn't help"},
        {id: 6, user_id: 1, action: "Tried, could use them, they helped"},
        {id: 7, user_id: 1, action: "Didn't try, used them, didn't help"},
        {id: 8, user_id: 1, action: "Didn't try, used them, they helped"}
      ]);
    });
};
