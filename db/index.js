const Sequelize = require('sequelize');

const sequelize = new Sequelize('api-center-dev', 'postgres', 'chubu', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('DB connection has been established successfully!');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  
module.exports = sequelize;