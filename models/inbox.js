'use strict';
module.exports = (sequelize, DataTypes) => {
  var Inbox = sequelize.define('Inbox', {
    user_id: DataTypes.INTEGER
  }, {timestamps: false});
  
    Inbox.associate= (models) => {
      Inbox.belongsTo(models.User, {
        foreignKey: 'user_id'
      })
      Inbox.belongsToMany(models.Thread, {
        through: 'inboxThreads',
        foreignKey: 'inbox_id'
      })
    };

  return Inbox;
};