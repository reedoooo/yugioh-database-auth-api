"use strict";

const deckModel = (sequelize, DataTypes) => {
    console.log('accessed deck model', )
  const Deck = sequelize.define(

    "Deck",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
        defaultValue: DataTypes.NOW,
      },
    },
    {
      // Define associations
      associate: (models) => {
        // Associate Deck with Cards model
        Deck.hasMany(models.Cards, {
          foreignKey: "deckId",
          as: "cards",
        });
      },
    }
  );

  return Deck;
};

module.exports = deckModel;
