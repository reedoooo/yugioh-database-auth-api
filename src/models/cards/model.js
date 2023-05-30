//------------------------------------------------------CARDS MODEL------------------------------------------------------//

const CardModel = (sequelize, DataTypes) => {
  const Cards = sequelize.define(
    "Cards",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      frameType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      card_images: {
        type: DataTypes.JSON, // Use JSON type for storing card_images
        allowNull: true,
      },

      archetype: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      atk: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      def: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      attribute: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      race: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );

  // Cards.associate = function (models) {
  //   Cards.belongsToMany(models.Deck, {
  //     through: "DeckCards",
  //     foreignKey: "cardId",
  //     otherKey: "deckId",
  //     as: "decks",
  //   });
  // };
  //   console.log('Cards', Cards.associations)
  return Cards;
};

console.log("CardModel", CardModel);

module.exports = CardModel;
