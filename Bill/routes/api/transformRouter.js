const express = require('express');
const { getTransformationService } = require('../../dependencies');

const router = express.Router();

router.post('/apply', async (req, res) => {
  const { filename, operations } = req.body;
  const transformationService = getTransformationService();
  try {
    const image = await transformationService.createImageWithOperations(filename, operations);
    const originalImage = await transformationService.fetchOriginalImage(filename);
    const transformedImage = await transformationService.applyTransformations(originalImage, operations);

    res.json({ message: "Succès", image: Buffer.from(transformedImage).toString('hex') });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;