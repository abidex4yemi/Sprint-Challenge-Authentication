const superTest = require('supertest');
const app = require('../../index');

const request = superTest(app);

describe('Home [GET] (/) Test suite', () => {
  let response = null;

  beforeAll(async () => {
    /* Runs before all tests */
    response = await request.get('/');
  });

  it('Should respond with status code of 200', async () => {
    expect(response.status).toEqual(200);
  });

  it('Should have response body ', () => {
    expect(response.body.message).toBe('API is alive...');
    expect(response.body.body).toHaveLength(0);
  });
});
