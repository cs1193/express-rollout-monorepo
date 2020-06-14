const debug = require('debug')('express:rollout');

const { isAllowedFileExtension } = require('./helpers')

class Rollout {
  constructor(options) {
    const {
      featureMetaFile
    } = options;

    if (!isAllowedFileExtension(featureMetaFile)) {
      throw new Error(`This file extension is not allowed.`);
      return null;
    }

    this.featureMetaFile = featureMetaFile;
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
