'use strict';
let { pokedex } = require('./data/pokedex.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pokedexes', pokedex, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pokedexes', null, {});
  }
};
