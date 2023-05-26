"use strict";

const { Sequelize, DataTypes } = require("sequelize");

// const userSchema = require("../auth/models/users");
// const teamModel = require("./teams/model.js");
// const teammateModel = require("./teammates/model.js");
const cardModel = require("./cards/model.js");
const deckModel = require("./decks/model.js");
const Collection = require("./data-collection.js");

const DATABASE_URL = process.env.DATABASE_URL || "sqlite:memory:";

const sequelize = new Sequelize(DATABASE_URL);

const cards = cardModel(sequelize, DataTypes);
const decks = deckModel(sequelize, DataTypes);


module.exports = {

  cardAndDecksDB: sequelize,
  cards: new Collection(cards),
  decks: new Collection(decks),
};
