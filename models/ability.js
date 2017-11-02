'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ability = sequelize.define('Ability', {
    ability_id: DataTypes.INTEGER,
    identifier: DataTypes.STRING,
    generation_id: DataTypes.INTEGER,
    is_main_series: DataTypes.INTEGER
  }, {timestamps: false});
  
    Ability.associate= (models) => {
      Ability.belongsToMany(models.Pokedex, {
        through: 'PokemonAbilities',
        foreignKey: 'ability_id'
      })
    };

  return Ability;
};