'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn('Cards', 'frameType', {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    // });
    // await queryInterface.addColumn('Cards', 'description', {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    // });
    // await queryInterface.addColumn('Cards', 'card_images', {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    // });
    // await queryInterface.addColumn('Cards', 'archetype', {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    // });
    // await queryInterface.addColumn('Cards', 'atk', {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    // });
    // await queryInterface.addColumn('Cards', 'def', {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    // });
    // await queryInterface.addColumn('Cards', 'level', {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    // });
    await queryInterface.addColumn('Cards', 'attribute', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('Cards', 'race', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Cards', 'frameType');
    await queryInterface.removeColumn('Cards', 'description');
    await queryInterface.removeColumn('Cards', 'card_images');
    await queryInterface.removeColumn('Cards', 'archetype');
    await queryInterface.removeColumn('Cards', 'atk');
    await queryInterface.removeColumn('Cards', 'def');
    await queryInterface.removeColumn('Cards', 'level');
    await queryInterface.removeColumn('Cards', 'attribute');
    await queryInterface.removeColumn('Cards', 'race');
  }
};
