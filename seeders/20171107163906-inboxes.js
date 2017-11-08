'use strict';
let { inboxes } = require('./data/inboxes.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Inboxes', inboxes, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Inboxes', null, {});
  }
};
