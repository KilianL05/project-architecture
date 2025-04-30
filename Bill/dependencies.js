const MinIOStorageService = require('./services/minioStorageService');
const config = require('./config');

function getStorageService() {
  return new MinIOStorageService(
    config.MINIO_ENDPOINT,
    config.MINIO_PORT,
    config.MINIO_ACCESS_KEY,
    config.MINIO_SECRET_KEY,
    config.MINIO_BUCKET_NAME,
  );
}

module.exports = { getStorageService };
