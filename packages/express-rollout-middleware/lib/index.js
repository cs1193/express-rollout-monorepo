function initialize(options) {
  let {
    featureMetaFile // Read from json, yaml, local FS, S3 bucket, etc.
  } = options;

  return {
    middleware(req, res, next) {
      console.log('express-rollout middleware');
      next();
    }
  }
}

module.exports = {
  initialize
};
