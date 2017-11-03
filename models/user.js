'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    ds_code: DataTypes.INTEGER,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.STRING,
    date_registered: DataTypes.STRING
  }, {timestamps: false});
  
    User.associate= (models) => {
      User.hasMany(models.Request, {
        foreignKey: 'userid'
      })
    };
  
  return User;
};