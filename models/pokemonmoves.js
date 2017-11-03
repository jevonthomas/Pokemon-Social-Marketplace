'use strict';
module.exports = (sequelize, DataTypes) => {
  var PokemonMoves = sequelize.define('PokemonMoves', {
    pokemon_id: DataTypes.INTEGER,
    version_group_id: DataTypes.INTEGER,
    move_id: DataTypes.INTEGER,
    pokemon_move_method_id: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    order: DataTypes.INTEGER
  }, {timestamps: false});
  
  return PokemonMoves;
};