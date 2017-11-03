'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Moves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      move_id: {
        type: Sequelize.INTEGER
      },
      identifier: {
        type: Sequelize.STRING
      },
      generation_id: {
        type: Sequelize.INTEGER
      },
      type_id: {
        type: Sequelize.INTEGER
      },
      power: {
        type: Sequelize.INTEGER
      },
      pp: {
        type: Sequelize.INTEGER
      },
      accuracy: {
        type: Sequelize.INTEGER
      },
      priority: {
        type: Sequelize.INTEGER
      },
      target_id: {
        type: Sequelize.INTEGER
      },
      damage_class_id: {
        type: Sequelize.INTEGER
      },
      effect_id: {
        type: Sequelize.INTEGER
      },
      effect_chance: {
        type: Sequelize.INTEGER
      },
      contest_type_id: {
        type: Sequelize.INTEGER
      },
      contest_effect_id: {
        type: Sequelize.INTEGER
      },
      super_contest_effect_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Moves');
  }
};