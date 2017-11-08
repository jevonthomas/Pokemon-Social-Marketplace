'use strict';
let { inboxThreads } = require('./data/inboxThread.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('inboxThreads', inboxThreads, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('inboxThreads', null, {});
  }
};
