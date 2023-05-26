'use strict';

const cardModel = (sequelize, DataTypes) => sequelize.define('Card', {
  name: {type: DataTypes.STRING, allowNull: false},
  level: {type: DataTypes.INTEGER, allowNull: false},
  type: {type: DataTypes.STRING, allowNull: false},
  race: {type: DataTypes.STRING, allowNull: true},
  attribute: {type: DataTypes.STRING, allowNull: true},
  atk: {type: DataTypes.INTEGER, allowNull: true},
  def: {type: DataTypes.INTEGER, allowNull: true},
  desc: {type: DataTypes.TEXT, allowNull: true},
  card_images: {type: DataTypes.JSON, allowNull: true},
});

module.exports = cardModel;
