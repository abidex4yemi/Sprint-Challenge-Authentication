const bcrypt = require('bcryptjs');
const knex = require('../../config/database');
const createModel = require('./users-model');

const User = createModel(knex);

const userDetails = {
  first_name: 'Fake',
  last_name: 'AllFake',
  password: '123456',
  email: 'fake@yahoo.com',
};

let createdUser = {};

describe('User Model helper functions Test suite', () => {
  beforeAll(async () => {
    await knex('users').truncate();
  });

  describe('createUser(user) Test suite', () => {
    it('Should insert new user with given object', async () => {
      userDetails.password = await bcrypt.hash(userDetails.password, 10);
      const user = await User.createUser(userDetails);
      createdUser = user;

      expect(user).toMatchObject({
        first_name: 'Fake',
        last_name: 'AllFake',
        email: 'fake@yahoo.com',
      });
    });
  });

  describe('getById(id) Test suite', () => {
    it('Should get a single user', async () => {
      const user = await User.getById(createdUser.id);

      expect(user).toMatchObject({
        first_name: 'Fake',
        last_name: 'AllFake',
        email: 'fake@yahoo.com',
      });
    });
  });

  describe('update(id, changes) Test suite', () => {
    let newDetails = {};

    beforeAll(() => {
      newDetails = {
        id: createdUser.id,
        first_name: 'Shade',
        last_name: 'AllFake',
        email: 'shade@yahoo.com',
      };
    });

    it('Should update a user details given id is valid', async () => {
      const updatedUserDetails = await User.update(createdUser.id, newDetails);

      expect(updatedUserDetails).toMatchObject(newDetails);
    });
  });
});
