const _ = require('lodash');

const AwsStorage = require('./aws');
const GcpStorage = require('./gcp');
const AzureStorage = require('./azure');

class CloudStorage {
  constructor(cloud) {
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
  }
}

module.exports = CloudStorage;
