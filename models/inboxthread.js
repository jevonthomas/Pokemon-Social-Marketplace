'use strict';
module.exports = (sequelize, DataTypes) => {
  var inboxThread = sequelize.define('inboxThread', {
    inbox_id: DataTypes.INTEGER,
    thread_id: DataTypes.INTEGER
  }, {timestamps: false});
  
  return inboxThread;
};