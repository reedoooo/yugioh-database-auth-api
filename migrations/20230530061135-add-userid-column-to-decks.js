'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Decks', 'userID', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0, // Replace with the desired default value
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Decks', 'userID');
  },
};
