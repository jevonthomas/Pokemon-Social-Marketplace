'use strict';
let { threads } = require('./data/threads.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Threads', threads, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Threads', null, {});
  }
};
