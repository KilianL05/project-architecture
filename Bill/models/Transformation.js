const { DataTypes } = require('sequelize');
const db = require('../db')();
const Image = require('./Image');

const Transformation = db.define('Transformation', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  params: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Image.hasMany(Transformation, { foreignKey: 'imageId' });
Transformation.belongsTo(Image, { foreignKey: 'imageId' });

module.exports = Transformation;