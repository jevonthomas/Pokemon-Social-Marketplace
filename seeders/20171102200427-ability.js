'use strict';
let { abilities } = require('./data/abilities.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Abilities', abilities, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Abilities', null, {});
  }
};
