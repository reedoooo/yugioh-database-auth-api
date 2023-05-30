'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const decksData = [
      {
        name: 'Deck 1',
        deckID: '1a',
        description: 'Description of Deck 1',
        author: 'Author 1',
        userID: 1, // Add the userID value
        cards: [
          {
            id: 3,
            name: 'Card 1',
            type: 'Type 1',
            frameType: 'Frame Type 1',
            description: 'Description of Card 1',
            card_images: 'Card Images 1',
            archetype: 'Archetype 1',
            atk: 100,
            def: 200,
            level: 5,
            attribute: 'Attribute 1',
            race: 'Race 1',
          },
          // Add more cards as needed
        ],
      },
      {
        name: 'Deck 2',
        deckID: '3c',
        description: 'Description of Deck 2',
        author: 'Author 2',
        userID: 2, // Add the userID value
        cards: [
          {
            id: 4,
            name: 'Card 2',
            type: 'Type 2',
            frameType: 'Frame Type 2',
            description: 'Description of Card 2',
            card_images: 'Card Images 2',
            archetype: 'Archetype 2',
            atk: 150,
            def: 300,
            level: 6,
            attribute: 'Attribute 2',
            race: 'Race 2',
          },
          // Add more cards as needed
        ],
      },
      // Add more decks as needed
    ];

    // Create decks
    const decksPromises = decksData.map(async (deckData) => {
      const { cards, ...deckValues } = deckData;

      const deck = await queryInterface.sequelize.transaction(async (transaction) => {
        const createdDeck = await queryInterface.bulkInsert('Decks', [deckValues], {
          returning: true,
          transaction,
        });

        const deckId = createdDeck[0].id;
        const formattedCards = cards.map((card) => ({ ...card, deckId }));
        await queryInterface.bulkInsert('Cards', formattedCards, { transaction });
      });

      return deck;
    });

    return Promise.all(decksPromises);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cards', null, {});
    await queryInterface.bulkDelete('Decks', null, {});
  },
};
