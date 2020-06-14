const debug = require('debug')('express:rollout');

const Rollout = require('./rollout');

function initialize(options) {
  let {
    featureMetaFile // Read from json, yaml, local FS, S3 bucket, etc.
  } = options;

  return {
    middleware(req, res, next) {
      const rolloutClient = new Rollout(options);
      req.rollout = rolloutClient;

      debug('express-rollout middleware');
      next();
    }
  }
}

module.exports = {
  initialize
};
