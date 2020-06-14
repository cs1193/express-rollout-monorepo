const supertest = require('supertest');

const app = require('./example-app');

describe('test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  });

  it('get works', (done) => {
    supertest(app)
      .head('/')
      .expect(200)
      .end(done);
  });
});
