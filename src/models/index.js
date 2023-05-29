"use strict";
//------------------------------------------------------INDEX------------------------------------------------------//

const { Sequelize, DataTypes } = require("sequelize");

const cardModel = require("./cards/model.js");
const deckModel = require("./decks/model.js");
const DataCollection = require("./data-collection.js");
console.log(DataCollection);
const DATABASE_URL = process.env.DATABASE_URL || "sqlite:memory:";

const sequelize = new Sequelize(DATABASE_URL);

const models = {
  Cards: cardModel(sequelize, DataTypes),

  Deck: deckModel(sequelize, DataTypes),
};
console.log("----------------Index1--------------------", models);
// Instantiate the collections with the DataCollection wrapper
const Cards = new DataCollection(models.Cards);
console.log("----------------Index2--------------------", Cards);
const decks = new DataCollection(models.Deck);
console.log("----------------Index3--------------------", decks);

module.exports = {
  cardAndDecksDB: sequelize,
  Cards: Cards,
  decks: decks,
};

// "use strict";

// const { Sequelize, DataTypes } = require("sequelize");
// const cardModel = require("./cards/model.js");
// const deckModel = require("./decks/model.js");
// const Collection = require("./data-collection.js");

// const DATABASE_URL = process.env.DATABASE_URL || "sqlite:memory:";

// const sequelize = new Sequelize(DATABASE_URL);

// const models = {
//   Deck: deckModel(sequelize, DataTypes),
//   Card: cardModel(sequelize, DataTypes),
// };

// Object.keys(models).forEach(modelName => {
//   if ('associate' in models[modelName]) {
//     models[modelName].associate(models);
//   }
// });

// // Instantiate the collections
// const cards = new Collection(models.Card);
// const decks = new Collection(models.Deck);

// module.exports = {
//   cardAndDecksDB: sequelize,
//   cards: cards,
//   decks: decks,
// };
