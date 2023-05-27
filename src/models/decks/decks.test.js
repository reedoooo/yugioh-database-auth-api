const { Sequelize, DataTypes } = require("sequelize");
const deckModel = require("./model.js");

// Create a test database connection
const sequelize = new Sequelize("sqlite::memory:");

describe("Deck Model", () => {
  // Initialize the model with the test database connection
  const Deck = deckModel(sequelize, DataTypes);

  // Run before each test
  beforeEach(async () => {
    // Sync the model with the database to create the table
    await sequelize.sync({ force: true });
  });

  // Run after all tests
  afterAll(async () => {
    // Close the database connection
    await sequelize.close();
  });

  it("should create a new deck", async () => {
    // Create a new deck
    const deckData = {
      name: "Test Deck",
      description: "Test Deck Description",
      author: "Test Author",
    };
    const deck = await Deck.create(deckData);

    // Assertion
    expect(deck).toBeDefined();
    expect(deck.name).toEqual(deckData.name);
    expect(deck.description).toEqual(deckData.description);
    expect(deck.author).toEqual(deckData.author);
  });

  it("should associate a deck with cards", async () => {
    // Create a new deck
    const deckData = {
      name: "Test Deck",
      description: "Test Deck Description",
      author: "Test Author",
    };
    const deck = await Deck.create(deckData);
    console.log("deck", deck)
    // Create some cards
    const cardData1 = { title: "Card 1", deckId: deck.id };
    const cardData2 = { title: "Card 2", deckId: deck.id };
    console.log("cardData1", cardData1);
    await deck.createCards(cardData1);
    await deck.createCards(cardData2);

    // Get the associated cards
    const cards = await deck.getCards();

    // Assertion
    expect(cards).toHaveLength(2);
    expect(cards[0].title).toEqual(cardData1.title);
    expect(cards[0].deckId).toEqual(deck.id);
    expect(cards[1].title).toEqual(cardData2.title);
    expect(cards[1].deckId).toEqual(deck.id);
  });

  // Add more tests as needed
});
