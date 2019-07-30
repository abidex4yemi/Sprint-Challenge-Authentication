/**
 * jokes query builder
 *
 * @param {Object} knex
 * @returns {Object} {get, insert, update, remove}
 */
const create = (knex) => {
  function getAll() {
    return knex('jokes');
  }

  function getById(id) {
    return knex('jokes')
      .where({ id })
      .first();
  }

  function insert(joke) {
    return knex('jokes')
      .insert(joke)
      .then(([id]) => getById(id));
  }

  function update(id, changes) {
    return knex('jokes')
      .where({ id })
      .update(changes)
      .then(count => (count > 0 ? getById(id) : null));
  }

  function remove(id) {
    return knex('jokes')
      .where({ id })
      .del();
  }

  // joke is the model name
  return {
    name: 'Joke',
    getById,
    insert,
    update,
    remove,
    getAll,
  };
};

module.exports = create;
