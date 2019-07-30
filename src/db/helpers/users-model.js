/**
 * users query builder
 *
 * @param {Object} knex
 * @returns {Object} {get, insert, update, remove}
 */
const create = (knex) => {
  function getById(id) {
    return knex('users')
      .where({ id })
      .then((user) => {
        // eslint-disable-next-line no-param-reassign
        delete user[0].password;
        return user[0];
      });
  }

  function getByEmail(email) {
    return knex('users')
      .where({ email })
      .first();
  }

  function createUser(user) {
    return knex('users')
      .insert(user)
      .then(([id]) => getById(id));
  }

  function update(id, changes) {
    return knex('users')
      .where({ id })
      .update(changes)
      .then(count => (count > 0 ? getById(id) : null));
  }

  function remove(id) {
    return knex('users')
      .where({ id })
      .del();
  }

  // User is the model name
  return {
    name: 'User',
    getById,
    create,
    update,
    remove,
    createUser,
    getByEmail,
  };
};

module.exports = create;
