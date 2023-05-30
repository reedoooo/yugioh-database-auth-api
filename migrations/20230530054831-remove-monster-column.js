module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Cards', 'monster');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Cards', 'monster', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
