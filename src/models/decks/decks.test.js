// Importing dependencies
const { expect } = require('chai');
const SequelizeMock = require('sequelize-mock');

// Setting up the mock database
const DBConnectionMock = new SequelizeMock();

// Mocking the Deck Model
const DeckModelMock = DBConnectionMock.define('Deck', {
    name: 'Test Deck',
    description: 'This is a test deck',
    author: 'Test Author',
    createdAt: '2023-05-26',
    updatedAt: '2023-05-26',
});

// Writing the tests
describe('Deck Model', () => {
    it('should have a name', async () => {
        let deck = await DeckModelMock.findOne({ where: { name: 'Test Deck' } });
        expect(deck.name).to.equal('Test Deck');
    });

    it('should have a description', async () => {
        let deck = await DeckModelMock.findOne({ where: { name: 'Test Deck' } });
        expect(deck.description).to.equal('This is a test deck');
    });

    it('should have an author', async () => {
        let deck = await DeckModelMock.findOne({ where: { name: 'Test Deck' } });
        expect(deck.author).to.equal('Test Author');
    });
});
