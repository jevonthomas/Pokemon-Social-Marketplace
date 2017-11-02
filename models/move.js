'use strict';
module.exports = (sequelize, DataTypes) => {
  var Move = sequelize.define('Move', {
    move_id: DataTypes.INTEGER,
    identifier: DataTypes.STRING,
    generation_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    pp: DataTypes.INTEGER,
    accuracy: DataTypes.INTEGER,
    priority: DataTypes.INTEGER,
    target_id: DataTypes.INTEGER,
    damage_class_id: DataTypes.INTEGER,
    effect_id: DataTypes.INTEGER,
    effect_chance: DataTypes.INTEGER,
    contest_type_id: DataTypes.INTEGER,
    contest_effect_id: DataTypes.INTEGER,
    super_contest_effect_id: DataTypes.INTEGER
  }, {timestamps: false});
  
  Move.associate= (models) => {
    Move.belongsToMany(models.Pokedex, {
      through: 'PokemonMoves',
      foreignKey: 'move_id'
    })
  };

  return Move;
};