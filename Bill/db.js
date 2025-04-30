const { Sequelize } = require('sequelize');

let sequelizeInstance = null;

function getDatabaseInstance() {
  if (!sequelizeInstance) {
    sequelizeInstance = new Sequelize({
      dialect: 'sqlite',
      storage: './puzzix.sqlite',
      logging: false,
    });
  }
  return sequelizeInstance;
}

module.exports = getDatabaseInstance;