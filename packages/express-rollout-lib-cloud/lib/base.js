const crypto = require('crypto');

class BaseStorage {
  constructor(options, bucketName) {
    this.options = options;
    this.bucketName = bucketName;
    this.storageInstance = null;
  }

  isBucketExists() {

  }
}

module.exports = BaseStorage;
