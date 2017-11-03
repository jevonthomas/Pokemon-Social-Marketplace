'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pokedex = sequelize.define('Pokedex', {
    pokemon_id: DataTypes.INTEGER,
    identifier: DataTypes.STRING,
    species_id: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    based_experience: DataTypes.INTEGER,
    order: DataTypes.INTEGER,
    is_default: DataTypes.INTEGER
  }, {timestamps: false});

  Pokedex.associate= (models) => {
    Pokedex.belongsToMany(models.Ability, {
      through: 'PokemonAbilities',
      foreignKey: 'pokemon_id'
    })
    Pokedex.belongsToMany(models.Move, {
      through: 'PokemonMoves',
      foreignKey: 'pokemon_id'
    })
  };
  
  return Pokedex;
};