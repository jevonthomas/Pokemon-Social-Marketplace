'use strict';
let { moves } = require('./data/moves.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Moves', moves, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Moves', null, {});
  }
};
