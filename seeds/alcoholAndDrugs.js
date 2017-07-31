
exports.seed = function(knex, Promise) {
  return knex('alcoholAndDrugs').del()
    .then(function () {
      return knex('alcoholAndDrugs').insert([
        {id: 1, user_id: 1, type: "illicit", amount: "", specify_drug: ""},
        {id: 2, user_id: 1, type: "prescription", amount: "", specify_drug: ""},
        {id: 3, user_id: 1, type: "alcohol", amount: "", specify_drug:""},
        {id: 4, user_id: 1, type: "Over_the_counter", amount: "", specify_drug: ""}
      ]);
    });
};
