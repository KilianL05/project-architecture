const { Sequelize } = require('sequelize');

class SQLiteStrategy {
  connect() {
    return new Sequelize({
      dialect: 'sqlite',
      storage: './puzzix.sqlite',
      logging: false,
    });
  }
}

module.exports = SQLiteStrategy;