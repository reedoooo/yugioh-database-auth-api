"use strict";

const deckModel = (sequelize, DataTypes) => {
  const Deck = sequelize.define(
    "Deck",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userID: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      deckID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cards: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return Deck;
};

module.exports = deckModel;
