const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
  'postgres', // DB name
  'postgres', // user
  'owih-fullstack-app', // pass
  {
    dialect: 'postgresql',
    host: 'db.mmkilawpwztnivripimd.supabase.co',
    port: 5432,
  }
)
