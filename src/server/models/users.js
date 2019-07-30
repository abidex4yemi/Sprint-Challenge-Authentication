const create = require('../../db/helpers/users-model');

module.exports = (knex) => {
  const models = create(knex);

  return {
    ...models,
  };
};
