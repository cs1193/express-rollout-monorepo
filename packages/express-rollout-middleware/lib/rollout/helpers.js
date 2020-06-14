const debug = require('debug')('express:rollout');

const _ = require('lodash');

const ALLOWED_EXTENSIONS = ['json', 'yml', 'yaml'];

const isAllowedFileExtension = (filename) => {
  const extension = path.extname(filename);
  debug(`file extension: ${extension}`);
  return _.includes(ALLOWED_EXTENSIONS, extension.replace('.', ''));
};

module.exports = {
  isAllowedFileExtension
}
