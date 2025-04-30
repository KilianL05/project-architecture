const { Sequelize } = require('sequelize');

class PostgresStrategy {
  connect() {
    return new Sequelize({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'pass',
      database: 'puzzix',
      logging: false,
    });
  }
}

module.exports = PostgresStrategy;
