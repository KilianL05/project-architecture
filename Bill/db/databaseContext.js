let sequelizeInstance = null;

class DatabaseContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  connect() {
    if (!sequelizeInstance) {
      sequelizeInstance = this.strategy.connect();
    }
    return sequelizeInstance;
  }
}

module.exports = DatabaseContext;