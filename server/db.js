const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
  process.env.DB_NAME, // DB name
  process.env.DB_USER, // user
  process.env.DB_PASSWORD, // pass
  {
    dialect: 'postgresql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
)
