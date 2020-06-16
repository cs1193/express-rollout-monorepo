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

  it('should call the AwsStorage class constructor if cloud is passed as aws', () => {
    const storage = new CloudStorage('aws');
    expect(AwsStorage).toHaveBeenCalledTimes(1);
  });

  it('should call the GcpStorage class constructor if cloud is passed as gcp', () => {
    const storage = new CloudStorage('gcp');
    expect(GcpStorage).toHaveBeenCalledTimes(1);
  });

  it('should call the AzureStorage class constructor if cloud is passed as azure', () => {
    const storage = new CloudStorage('azure');
    expect(AzureStorage).toHaveBeenCalledTimes(1);
  });
});
