'use strict';
let { pokemon_ability } = require('./data/pokemon_ability.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PokemonAbilities', pokemon_ability, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PokemonAbilities', null, {});
  }
};
