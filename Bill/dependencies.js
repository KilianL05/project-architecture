const MinIOStorageService = require('./services/minioStorageService');
const config = require('./config');

function getStorageService() {
  return new MinIOStorageService(
    config.MINIO_ENDPOINT,
    config.MINIO_ACCESS_KEY,
    config.MINIO_SECRET_KEY
  );
}

module.exports = { getStorageService };
