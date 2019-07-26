const bcrypt = require('bcryptjs');
const knex = require('../../config/database');
const createModel = require('./users-model');

const { createUser } = createModel(knex);

const userDetails = {
  first_name: 'Fake',
  last_name: 'AllFake',
  password: '123456',
  email: 'fake@yahoo.com',
};

describe('User Model helper functions Test suite', () => {
  beforeEach(async () => {
    await knex('users').truncate();
  });

  describe('createUser(user) Test suite', () => {
    it('Should insert new user with given object', async () => {
      userDetails.password = await bcrypt.hash(userDetails.password, 10);
      const user = await createUser(userDetails);

      expect(user).toMatchObject({
        first_name: 'Fake',
        last_name: 'AllFake',
        email: 'fake@yahoo.com',
      });
    });
  });
});
