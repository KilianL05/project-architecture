require('dotenv').config();

module.exports = {
  MINIO_ENDPOINT: process.env.MINIO_ENDPOINT || 'localhost',
  MINIO_ACCESS_KEY: process.env.MINIO_ACCESS_KEY || 'minio',
  MINIO_SECRET_KEY: process.env.MINIO_SECRET_KEY || 'password',
  MINIO_BUCKET_NAME: process.env.MINIO_BUCKET_NAME || 'puzzix',
  MINIO_PORT: process.env.MINIO_PORT || 9000,
  DIEGO_SERVERS: (process.env.DIEGO_SERVERS || 'http://diego1:²5000,http://diego2:5000').split(','),
  ELISE_SERVERS: (process.env.ELISE_SERVERS || 'http://elise1:5000,http://elise2:5000').split(','),
  CLAIRE_URL: process.env.CLAIRE_URL || 'http://claire:8000',
};
