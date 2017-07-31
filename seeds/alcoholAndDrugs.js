
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('alcoholAndDrugs').del()
    .then(function () {
      // Inserts seed entries
      return knex('alcholAndDrugs').insert([
        {id: 1, type: "illicit", amount: "", specify drug: ""},
        {id: 2, type: "prescription", amount: "", specify drug: ""},
        {id: 3, type: "Over the counter" amount: "" specify drug: ""},

      ]);
    });
};
