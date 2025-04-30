const express = require('express');
const TransformationService = require('../../services/transformationService');

const router = express.Router();
const diegoServers = ["http://diego1:8000", "http://diego2:8000"];
const eliseServers = ["http://elise1:8000", "http://elise2:8000"];
const transformationService = new TransformationService(diegoServers, eliseServers);

router.post('/transform', async (req, res) => {
  const { filename, operations } = req.body;
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