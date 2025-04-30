const express = require('express');
const { getStorageService } = require('../../dependencies');
const config = require('../../config');

const router = express.Router();

router.post('/upload', async (req, res) => {
  const { sourceFile, destinationFile } = req.body;
  const storageService = getStorageService();
  try {
    await storageService.uploadFile(config.bucketName, sourceFile, destinationFile);
    res.json({ message: 'File uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/download', async (req, res) => {
  const { fileName, destinationFile } = req.query;
  const storageService = getStorageService();

  try {
    await storageService.downloadFile(config.MINIO_BUCKET_NAME, fileName, destinationFile);
    res.json({ message: 'File downloaded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:filename', async (req, res) => {
  const { filename } = req.params;
  const storageService = getStorageService();
  
  try {
    const fileStream = await storageService.getFileStream(config.MINIO_BUCKET_NAME, filename);
    fileStream.pipe(res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
