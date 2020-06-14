const supertest = require('supertest');

const app = require('./fixtures/example-app');

describe('test', () => {
  it('get works', (done) => {
    supertest(app)
      .head('/')
      .expect(200)
      .end(done);
  });
});
