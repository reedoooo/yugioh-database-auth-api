'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Decks', 'deckID', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'default-value', // Set the desired default value
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Decks', 'deckID');
  },
};
