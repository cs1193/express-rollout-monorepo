global.Promise = require('bluebird');

const _ = require('lodash');

const AwsStorage = require('./aws');
const GcpStorage = require('./gcp');
const AzureStorage = require('./azure');

class CloudStorage {
  static instance = null;

  constructor(cloud, bucketName) {
    if (!cloud) {
      throw new Error('The cloud option is undefined');
    }

    if (_.toLower(cloud) === 'aws') {
      this.storage = new AwsStorage();
    } else if (_.toLower(cloud) === 'gcp') {
      this.storage = new GcpStorage();
    } else if (_.toLower(cloud) === 'azure') {
      this.storage = new AzureStorage();
    }

    this.bucketName = bucketName;
  }

  isFeatureBucketExists() {
    this.storage.isBucketExists(this.bucketName);
  }

  static createInstance(cloud, bucketName) {
    if (CloudStorage.instance instanceof CloudStorage) {
      return CloudStorage.instance;
    }

    CloudStorage.instance = new CloudStorage(cloud, bucketName);
    return CloudStorage.instance;
  }
}

module.exports = CloudStorage;
