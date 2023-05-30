'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Decks', { // Change table name to 'Deck'
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deckID: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cards: {
        type: Sequelize.JSON,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Decks'); // Change table name to 'Deck'
  }
};
