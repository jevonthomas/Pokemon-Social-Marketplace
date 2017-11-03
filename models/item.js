'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    itemid: DataTypes.INTEGER,
    identifier: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    cost: DataTypes.INTEGER,
    fling_power: DataTypes.INTEGER,
    fling_effect_id: DataTypes.INTEGER
  }, {timestamps: false});

  return Item;
};