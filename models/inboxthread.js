'use strict';
module.exports = (sequelize, DataTypes) => {
  var inboxThread = sequelize.define('inboxThread', {
    inbox_id: DataTypes.INTEGER,
    thread_id: DataTypes.INTEGER,
    random: DataTypes.INTEGER,

    // I don't want createdAt
    createdAt: false,
  
    // I want updatedAt to actually be called updateTimestamp
    updatedAt: 'updateTimestamp',
  
    // And deletedAt to be called destroyTime (remember to enable paranoid for this to work)
    deletedAt: 'destroyTime',
    paranoid: true

  }, {timestamps: true});
  
  return inboxThread;
};