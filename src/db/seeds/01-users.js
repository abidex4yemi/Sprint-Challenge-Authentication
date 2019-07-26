/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex, Promise) {
  return knex('users').insert([
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@gmail.com',
      password: '$2b$12$3DLHQshuQu4E5ne9H5H5ReqygL4iMNpG/kP3Bg8kGWdgJ7d/W7Qpa',
    },
  ]);
};
