const Image = require('../models/Image');

class ImageDAO {
  static async create(filename) {
    return await Image.create({ filename });
  }

  static async getById(id) {
    return await Image.findByPk(id, { include: 'Transformations' });
  }
}

module.exports = ImageDAO;