'use strict';
module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
    user_id: DataTypes.INTEGER,
    thread_id: DataTypes.INTEGER,
    date: DataTypes.STRING,
    message: DataTypes.TEXT
  }, {timestamps: false});
  
    Message.associate= (models) => {
      Message.belongsTo(models.User, {
        foreignKey: 'user_id'
      })
      Message.belongsTo(models.Thread, {
        foreignKey: 'thread_id'
      })
    };

  return Message;
};