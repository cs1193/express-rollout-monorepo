const path = require('path');
const crypto = require('crypto');

const debug = require('debug')('express:rollout');
const _ = require('lodash');

const ALLOWED_EXTENSIONS = ['json', 'yml', 'yaml'];

const isAllowedFileExtension = (filename) => {
  debug(`isAllowedFileExtension: ${filename}`);
  const extension = path.extname(filename);
  return _.includes(ALLOWED_EXTENSIONS, extension.replace('.', ''));
};

const generateRandomBucketName = (filename) => {
  const hash = crypto.createHmac('sha1', path.basename(filename)).digest('hex');
  return `${hash}-feature-flags`;
};

module.exports = {
  isAllowedFileExtension,
  generateRandomBucketName
}
