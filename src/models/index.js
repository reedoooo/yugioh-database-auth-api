"use strict";
const { Sequelize, DataTypes } = require("sequelize");
const cardModel = require("./cards/model.js");
const deckModel = require("./decks/model.js");
const DataCollection = require("./data-collection.js");
const config = require('../../config/config.json');

// Use the configuration from config/config.json
const { username, password, database, host, dialect, dialectOptions } = config.development;
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  dialectOptions: dialectOptions,
});

const models = {
  Cards: cardModel(sequelize, DataTypes),
  Deck: deckModel(sequelize, DataTypes),
};

// Instantiate the collections with the DataCollection wrapper
const Cards = new DataCollection(models.Cards);
const decks = new DataCollection(models.Deck);

module.exports = {
  cardAndDecksDB: sequelize,
  Cards: Cards,
  decks: decks,
};
