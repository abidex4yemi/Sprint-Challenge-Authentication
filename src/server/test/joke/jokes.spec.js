const superTest = require('supertest');
const app = require('../../index');
const db = require('../../../config/database');

const request = superTest(app);

let createdUser = null;
let createdJoke = null;

const user = {
  first_name: 'shade',
  last_name: 'jane',
  password: '123456',
  email: 'shade@yahoo.com',
};

const joke = {
  joke: "I'm thinking of a good joke",
};

// Drop database tables
beforeAll(async () => {
  await db('jokes').truncate();
  await db('users').truncate();
});

// Register a new user
beforeAll(async (done) => {
  request
    .post('/api/v1/auth/register')
    .send(user)
    .end((err, res) => {
      createdUser = res.body.body;
      done();
    });
});

describe('Jokes [POST] [/api/v1/jokes] Test suite', () => {
  let response = null;

  beforeAll(async () => {
    response = await request
      .post('/api/v1/jokes')
      .set('Authorization', createdUser.token)
      .send(joke);

    createdJoke = response.body.body;
  });

  it('Should respond with status code of 201', () => {
    expect(response.status).toEqual(201);
  });

  it('Should respond with body of jokes array', () => {
    expect(response.body.body).toMatchObject({ id: 1, joke: "I'm thinking of a good joke" });
  });
});

describe('Jokes [GET] [/api/v1/jokes] Test suite', () => {
  let response = null;

  beforeAll(async () => {
    response = await request.get('/api/v1/jokes').set('Authorization', createdUser.token);
  });

  it('Should respond with status code of 200', () => {
    expect(response.status).toEqual(200);
  });

  it('Should respond with success of truthy', () => {
    expect(response.body.success).toBeTruthy();
  });

  it('Should respond with body of jokes array', () => {
    expect(response.body.body).toHaveLength(1);
  });
});

describe('Jokes [DELETE] [/api/v1/jokes/:id] Test suite', () => {
  let response = null;

  beforeAll(async () => {
    response = await request.delete(`/api/v1/jokes/${createdJoke.id}`).set('Authorization', createdUser.token);
  });

  it('Should respond with status code of 200', () => {
    expect(response.status).toEqual(200);
  });

  it('Should respond with success of truthy', () => {
    expect(response.body.success).toBeTruthy();
  });

  it('Should respond with body of jokes array', () => {
    expect(response.body.body).toHaveProperty('id');
  });
});
