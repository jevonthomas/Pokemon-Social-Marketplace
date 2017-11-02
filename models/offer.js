'use strict';
module.exports = (sequelize, DataTypes) => {
  var Offer = sequelize.define('Offer', {
    requestid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    ability: DataTypes.STRING,
    nature: DataTypes.STRING,
    gender: DataTypes.STRING,
    item: DataTypes.STRING,
    level: DataTypes.INTEGER,
    move_1: DataTypes.STRING,
    move_2: DataTypes.STRING,
    move_3: DataTypes.STRING,
    move_4: DataTypes.STRING,
    hp_iv: DataTypes.INTEGER,
    attack_iv: DataTypes.INTEGER,
    defense_iv: DataTypes.INTEGER,
    sp_att_iv: DataTypes.INTEGER,
    sp_def_iv: DataTypes.INTEGER,
    speed_iv: DataTypes.INTEGER
  }, {timestamps: false});
  
    Offer.associate= (models) => {
      Offer.belongsTo(models.Request, {
        foreignKey: 'requestid'
      })
    };

  return Offer;
};