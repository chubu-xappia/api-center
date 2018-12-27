'use strict';
const { hashPassword } = require('../../services');
const Sequelize = require('sequelize');

let passToHash = 'pass';
let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDU4NDkwMDksImV4cCI6MTU0ODQ0MTAwOX0.AnA1YnnpVn05Cxq03c-av9XF9NMK1aZSGZAZRrmsI0E';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Clients', [{
        username: 'John Doe',
        password: await hashPassword(passToHash),
        token: token,
        createdAt: Sequelize.literal('NOW()')
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clients', null, {});  
  }
};
