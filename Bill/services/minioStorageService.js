const Minio = require('minio');
const StorageService = require('./storageService');

class MinIOStorageService extends StorageService {
  constructor(endpoint, port, accessKey, secretKey, bucketName) {
    super();
    this.client = new Minio.Client({
      endPoint: endpoint,
      port: port,
      useSSL: false,
      accessKey: accessKey,
      secretKey: secretKey,
      bucketName: bucketName,
    });
  }

  async uploadFile(bucketName, sourceFile, destinationFile) {
    const bucketExists = await this.client.bucketExists(bucketName);
    if (!bucketExists) {
      await this.client.makeBucket(bucketName);
      console.log(`Created bucket ${bucketName}`);
    } else {
      console.log(`Bucket ${bucketName} already exists`);
    }

    await this.client.fPutObject(bucketName, destinationFile, sourceFile);
    console.log(`${sourceFile} successfully uploaded as object ${destinationFile} to bucket ${bucketName}`);
  }

  async downloadFile(bucketName, fileName, destinationFile) {
    await this.client.fGetObject(bucketName, fileName, destinationFile);
    console.log(`${fileName} successfully downloaded to ${destinationFile}`);
  }
}

module.exports = MinIOStorageService;
