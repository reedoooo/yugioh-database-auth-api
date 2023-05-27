'use strict';

const cardModel = (sequelize, DataTypes) => {
  console.log('accessed card model', )
  const Card = sequelize.define('Card', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    archetype: {
      type: DataTypes.STRING,
      allowNull: true
    },
    atk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    attribute: {
      type: DataTypes.STRING,
      allowNull: true
    },
    def: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    frameType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    race: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  const CardImages = sequelize.define('CardImages', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    card_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image_url_small: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image_url_cropped: {
      type: DataTypes.STRING,
      allowNull: true
    },
  });

  const CardPrices = sequelize.define('CardPrices', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    card_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    cardmarket_price: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true
    },
    tcgplayer_price: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true
    },
    ebay_price: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true
    },
    amazon_price: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true
    },
    coolstuffinc_price: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true
    },
  });

  const CardSets = sequelize.define('CardSets', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    card_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    set_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    set_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    set_rarity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    set_rarity_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    set_price: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true
    },
  });

  Card.hasMany(CardImages, {foreignKey: 'card_id'});
  Card.hasMany(CardPrices, {foreignKey: 'card_id'});
  Card.hasMany(CardSets, {foreignKey: 'card_id'});

  CardImages.belongsTo(Card, {foreignKey: 'card_id'});
  CardPrices.belongsTo(Card, {foreignKey: 'card_id'});
  CardSets.belongsTo(Card, {foreignKey: 'card_id'});

  return {Card, CardImages, CardPrices, CardSets};
};

module.exports = cardModel;
