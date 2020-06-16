const BaseStorage = require('./base');

const AWS = require('aws-sdk');


class AwsStorage extends BaseStorage {
  constructor(options, bucketName) {
    super(options, bucketName);

    const {
      accessKeyId,
      secretAccessKey,
      region
    } = options;

    AWS.config.update({
      accessKeyId,
      secretAccessKey,
      region
    });

    this.storageInstance = new AWS.S3({
      apiVersion: '2006-03-01'
    });
  }

  isBucketExists() {
    const params = {
      Bucket: this.bucketName
    };

    this.storageInstance.createBucket(params, (err, data) => {
      if (err && err.statusCode == 409) {
        console.log('Bucket has been created already.');
      } else {
        console.log('Bucket created successfully', data);
      }
    });
  }
};

module.exports = AwsStorage;
