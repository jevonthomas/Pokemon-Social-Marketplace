'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      ability: {
        type: Sequelize.STRING
      },
      nature: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      item: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      move_1: {
        type: Sequelize.STRING
      },
      move_2: {
        type: Sequelize.STRING
      },
      move_3: {
        type: Sequelize.STRING
      },
      move_4: {
        type: Sequelize.STRING
      },
      hp_iv: {
        type: Sequelize.INTEGER
      },
      attack_iv: {
        type: Sequelize.INTEGER
      },
      defense_iv: {
        type: Sequelize.INTEGER
      },
      sp_att_iv: {
        type: Sequelize.INTEGER
      },
      sp_def_iv: {
        type: Sequelize.INTEGER
      },
      speed_iv: {
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.STRING
      },
      species_id: {
        type: Sequelize.INTEGER
      },
      request_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Trades');
  }
};