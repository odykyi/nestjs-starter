

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface
      .createTable('tasks', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type:Sequelize.INTEGER,
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
        },
      });
  },

  down(queryInterface, Sequelize) {
    return queryInterface
      .dropTable('tasks');
  },
};
