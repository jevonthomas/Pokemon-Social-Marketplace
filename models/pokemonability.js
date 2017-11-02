'use strict';
module.exports = (sequelize, DataTypes) => {
  var PokemonAbility = sequelize.define('PokemonAbility', {
    pokemon_id: DataTypes.INTEGER,
    ability_id: DataTypes.INTEGER,
    is_hidden: DataTypes.INTEGER,
    slot: DataTypes.INTEGER
  }, {timestamps: false});
  
  return PokemonAbility;
};