const express = require('express');
const axios = require('axios');
const ImageDAO = require('../../dao/imagesDAO');
const TransformationFactory = require('../../factory/transformationFactory');
const Transformation = require('../../models/Transformation');

const router = express.Router();

const CLAIRE_URL = "http://claire:8000";
const diegoServers = ["http://diego1:8000", "http://diego2:8000"];
const eliseServers = ["http://elise1:8000", "http://elise2:8000"];
let diegoIndex = 0;
let eliseIndex = 0;

function getNextServer(servers, indexRef) {
  const server = servers[indexRef.current % servers.length];
  indexRef.current++;
  return server;
}

diegoIndex = { current: 0 };
eliseIndex = { current: 0 };

router.post('/transform', async (req, res) => {
  const { filename, operations } = req.body;
  try {
    const image = await ImageDAO.create(filename);

    for (let i = 0; i < operations.length; i++) {
      const op = operations[i];
      const transformation = TransformationFactory.create(image.id, op.type, op.params, i);
      await transformation.save();
    }

    const originalImage = await axios.get(`${CLAIRE_URL}/images/${filename}`, { responseType: 'arraybuffer' });
    let currentImage = originalImage.data;

    for (const op of operations) {
      let targetUrl;
      if (op.type === 'filtre') {
        targetUrl = getNextServer(diegoServers, diegoIndex) + "/transform";
      } else if (op.type === 'effet') {
        targetUrl = getNextServer(eliseServers, eliseIndex) + "/transform";
      } else {
        return res.status(400).json({ error: 'Type invalide' });
      }

      const response = await axios.post(targetUrl, currentImage, {
        headers: { 'Content-Type': 'application/octet-stream' },
        params: op.params,
        responseType: 'arraybuffer'
      });
      currentImage = response.data;
    }

    res.json({ message: "Succès", image: Buffer.from(currentImage).toString('hex') });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
