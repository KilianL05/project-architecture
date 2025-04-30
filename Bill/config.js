require('dotenv').config();

module.exports = {
  MINIO_ENDPOINT: process.env.MINIO_ENDPOINT || 'localhost',
  MINIO_ACCESS_KEY: process.env.MINIO_ACCESS_KEY || 'minio',
  MINIO_SECRET_KEY: process.env.MINIO_SECRET_KEY || 'password',
};
