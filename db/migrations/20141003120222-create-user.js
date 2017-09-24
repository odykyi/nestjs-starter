

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface
      .createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        login: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        createdAt: {
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
      });
  },

  down(queryInterface, Sequelize) {
    return queryInterface
      .dropTable('users');
  },
};
