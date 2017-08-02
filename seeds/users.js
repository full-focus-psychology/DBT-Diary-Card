
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, user_id: 1, name: "Mindy Merton", therapist: 'John Toogood', therapists_email: 'John@toogood.com'},
        {id: 2, user_id: 2, name: "John Janter", therapist: 'John Toogood', therapists_email: 'John@toogood.com'},
        {id: 3, user_id: 3, name: "Sam Stone", therapist: 'John Toogood', therapists_email: 'John@toogood.com'}
      ]);
    });
};
