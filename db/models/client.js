const Sequelize = require('sequelize');
const sequelize = require('../index');

const Client = sequelize.define('Client', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  token: {
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: true,
    type: Sequelize.DATE
  }
});


Client.associate = function(models) {
  // associations can be defined here
};

module.exports = Client;

