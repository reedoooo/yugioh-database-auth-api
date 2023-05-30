'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Cards', 'deckId', {
      type: Sequelize.BIGINT,
      allowNull: false,
      references: {
        model: 'Decks',
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Cards', 'deckId');
  },
};
