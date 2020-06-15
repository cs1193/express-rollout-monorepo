const debug = require('debug')('express:rollout');

const { isAllowedFileExtension } = require('./helpers');
const Storage = require('./storage');

class Rollout {
  constructor(options) {
    const {
      storage,
      bucketName,
      featureMetaFile,
      featureMetaFileVersion
    } = options;

    // if (!isAllowedFileExtension(featureMetaFile)) {
    //   throw new Error(`This file extension is not allowed.`);
    //   return null;
    // }

    // this.featureMetaFile = featureMetaFile;
    this.storage = new Storage(storage, bucketName, featureMetaFile, featureMetaFileVersion);
  }

  isFeatureEnabled(featureKey, attributes) {
    try {
      let featureEnabled = false;

      return featureEnabled;
    } catch(e) {
      return false;
    }
  }
}

module.exports = Rollout;
