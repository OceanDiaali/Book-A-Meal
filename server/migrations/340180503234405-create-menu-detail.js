'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MenuDetails', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      mealId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: 'CASCADE',
        references: {
          model: 'Meals',
          key: 'id',
          as: 'mealId',
        },
      },
      menuId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: 'CASCADE',
        references: {
          model: 'Menus',
          key: 'id',
          as: 'menuId',
        },
      },
    });
  },
down: (queryInterface /*, Sequelize*/) => 
  queryInterface.dropTable('MenuDetails')
};