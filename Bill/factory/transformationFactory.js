const Transformation = require('../models/Transformation');

class TransformationFactory {
  static create(imageId, type, params, order) {
    return Transformation.build({
      imageId,
      type,
      params,
      order
    });
  }
}

module.exports = TransformationFactory;
