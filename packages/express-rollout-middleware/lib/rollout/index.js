const debug = require('debug')('express:rollout');

const { isAllowedFileExtension } = require('./helpers');
const Cloud = require('./cloud');

class Rollout {
  constructor(options) {
    const {
      cloud,
      bucketName,
      featureMetaFile,
      featureMetaFileVersion
    } = options;

    // if (!isAllowedFileExtension(featureMetaFile)) {
    //   throw new Error(`This file extension is not allowed.`);
    //   return null;
    // }

    // this.featureMetaFile = featureMetaFile;
    this.cloud = new Cloud(cloud, bucketName, featureMetaFile, featureMetaFileVersion);
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
