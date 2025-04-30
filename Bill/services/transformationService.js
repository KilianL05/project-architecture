const TransformationFactory = require("../factory/transformationFactory");
const {get, post} = require("axios");
const ImageDAO = require("../dao/imagesDAO");

const CLAIRE_URL = "http://claire:8000";

class TransformationService {
  constructor(diegoServers, eliseServers) {
    this.diegoServers = diegoServers;
    this.eliseServers = eliseServers;
    this.diegoIndex = { current: 0 };
    this.eliseIndex = { current: 0 };
  }

  getNextServer(servers, indexRef) {
    const server = servers[indexRef.current % servers.length];
    indexRef.current++;
    return server;
  }

  async createImageWithOperations(filename, operations) {
    const image = await ImageDAO.create(filename);
    for (let i = 0; i < operations.length; i++) {
      const op = operations[i];
      const transformation = TransformationFactory.create(image.id, op.type, op.params, i);
      await transformation.save();
    }
    return image;
  }

  async fetchOriginalImage(filename) {
    const response = await get(`${CLAIRE_URL}/images/${filename}`, { responseType: 'arraybuffer' });
    return response.data;
  }

  async applyTransformations(imageData, operations) {
    let currentImage = imageData;
    for (const op of operations) {
      let targetUrl;
      if (op.type === 'filtre') {
        targetUrl = this.getNextServer(this.diegoServers, this.diegoIndex) + "/transform";
      } else if (op.type === 'effet') {
        targetUrl = this.getNextServer(this.eliseServers, this.eliseIndex) + "/transform";
      } else {
        throw new Error("Type invalide");
      }

      const response = await post(targetUrl, currentImage, {
        headers: { 'Content-Type': 'application/octet-stream' },
        params: op.params,
        responseType: 'arraybuffer'
      });
      currentImage = response.data;
    }
    return currentImage;
  }
}

module.exports = TransformationService;