'use strict';
let { pokemon_moves } = require('./data/pokemon_moves.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PokemonMoves', pokemon_moves, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PokemonMoves', null, {});
  }
};
