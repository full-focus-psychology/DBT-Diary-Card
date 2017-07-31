
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        {id: 1, action: "Didn't think about and didn't use"},
        {id: 2, action: "Thought about, didn't use, didn't want to"}
        {id: 3, action: "Thought about, didn't use, but wanted to"},
        {id: 4, action: "Tried, but couldn't use them"},
        {id: 5, action: "Tried, could do them, but they didn't help"},
        {id: 6, action: "Tried, could use them, they helped"},
        {id: 7, action: "Didn't try, used them, didn't help"},
        {id: 8, action: "Didn't try, used them, they helped"}
      ]);
    });
};
