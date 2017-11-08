'use strict';
module.exports = (sequelize, DataTypes) => {
  var Thread = sequelize.define('Thread', {
    active: DataTypes.BOOLEAN
  }, {timestamps: false});
  
    Thread.associate= (models) => {
      Thread.belongsToMany(models.Inbox, {
        through: 'inboxThreads',
        foreignKey: 'thread_id'
      })
      Thread.hasMany(models.Message, {
        foreignKey: 'thread_id'
      })
    };

  return Thread;
};