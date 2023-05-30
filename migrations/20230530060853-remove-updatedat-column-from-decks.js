'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Cards', 'updatedAt');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Cards', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
  },
};
