const _ = require('lodash');

const ALLOWED_STORAGE_PROVIDER = ['aws', 'azure', 'gcp'];

const AWSStorage = require('./aws');

class Storage {
  constructor(storage, bucketName, featureMetaFile, featureMetaFileVersion) {
    if (!storage && _.includes(ALLOWED_STORAGE_PROVIDER, storage)) {
      throw new Error(``);
    }
    console.log(`cloud - ${storage} - ${bucketName} - ${featureMetaFile} - ${featureMetaFileVersion}`);
  }
}

module.exports = Storage;
