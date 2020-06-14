const debug = require('debug')('express:rollout');

const _ = require('lodash');

const ALLOWED_EXTENSIONS = ['json', 'yml', 'yaml'];

const isAllowedFileExtension = (filename) => {
  debug(`isAllowedFileExtension: ${filename}`);
  const extension = path.extname(filename);
  return _.includes(ALLOWED_EXTENSIONS, extension.replace('.', ''));
};

module.exports = {
  isAllowedFileExtension
}
