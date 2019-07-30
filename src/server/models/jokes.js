const create = require('../../db/helpers/jokes-model');

module.exports = (knex) => {
  const models = create(knex);

  return {
    ...models,
  };
};
