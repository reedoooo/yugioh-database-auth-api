`use strict`;

const deckModel = (sequelize, DataTypes) => sequelize.define(`Deck`, {
  name: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.TEXT, allowNull: true},
  cards: {type: DataTypes.JSON, allowNull: true},
});

export default deckModel;






