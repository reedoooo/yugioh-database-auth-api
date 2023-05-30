'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Cards', 'createdAt');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Cards', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
  },
};
