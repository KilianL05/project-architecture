const express = require('express');
const { getStorageService } = require('../../dependencies');

const router = express.Router();

router.post('/upload', async (req, res) => {
  const { bucketName, sourceFile, destinationFile } = req.body;
  const storageService = getStorageService();
  try {
    await storageService.uploadFile(bucketName, sourceFile, destinationFile);
    res.json({ message: 'File uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/download', async (req, res) => {
  const { bucketName, fileName, destinationFile } = req.query;
  const storageService = getStorageService();
  try {
    await storageService.downloadFile(bucketName, fileName, destinationFile);
    res.json({ message: 'File downloaded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
