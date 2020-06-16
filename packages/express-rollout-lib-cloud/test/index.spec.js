const CloudStorage = require('../lib/index');

const AwsStorage = require('../lib/aws');
const GcpStorage = require('../lib/gcp');
const AzureStorage = require('../lib/azure');

jest.mock('../lib/aws');
jest.mock('../lib/gcp');
jest.mock('../lib/azure');

describe('test:cloudstorage', () => {

  beforeEach(() => {
    AwsStorage.mockClear();
    GcpStorage.mockClear();
    AzureStorage.mockClear();
  });

  afterEach(() => {
    delete CloudStorage.instance; // Reset singleton to continue tests
  });

  it('should call the AwsStorage class constructor if cloud is passed as aws', () => {
    const storage = CloudStorage.createInstance('aws');
    expect(AwsStorage).toHaveBeenCalledTimes(1);
  });

  it('should call the GcpStorage class constructor if cloud is passed as gcp', () => {
    const storage = CloudStorage.createInstance('gcp');
    expect(GcpStorage).toHaveBeenCalledTimes(1);
  });

  it('should call the AzureStorage class constructor if cloud is passed as azure', () => {
    const storage = CloudStorage.createInstance('azure');
    expect(AzureStorage).toHaveBeenCalledTimes(1);
  });

  it('should call the AwsStorage class constructor if cloud is passed as aws', () => {
    const storage = CloudStorage.createInstance('aws', 'feature-flag');
    storage.isFeatureBucketExists()
    expect(AwsStorage).toHaveBeenCalledTimes(1);
  });
});
