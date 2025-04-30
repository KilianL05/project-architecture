const MinIOStorageService = require('./services/minioStorageService');
const config = require('./config');
const TransformationService = require('./services/transformationService');

function getStorageService() {
  return new MinIOStorageService(
    config.MINIO_ENDPOINT,
    config.MINIO_PORT,
    config.MINIO_ACCESS_KEY,
    config.MINIO_SECRET_KEY,
    config.MINIO_BUCKET_NAME,
  );
}

function getTransformationService() {
  return new TransformationService(config.DIEGO_SERVERS, config.ELISE_SERVERS);
}

module.exports = { getStorageService, getTransformationService };
