const SQLiteStrategy = require('./strategies/sqliteStrategy');
// const PostgresStrategy = require('./strategies/postgresStrategy');
const DatabaseContext = require('./databaseContext');


const strategy = new SQLiteStrategy();
// const strategy = new PostgresStrategy();

const dbContext = new DatabaseContext(strategy);
module.exports = () => dbContext.connect();
