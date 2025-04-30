const { DataTypes } = require('sequelize');
const db = require('../db')();

const Image = db.define('Image', {
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Image;