const supertest = require('supertest');

const app = require('./app');

describe('app:rollout:test', () => {
  it('should get request', (done) => {
    supertest(app)
      .head('/')
      .expect(200)
      .end(done);
  });
});
