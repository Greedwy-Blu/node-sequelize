'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      
      id:{ type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

      
      },
    name:{
type: Sequelize.STRING,
allowNull: false,

    },
    email:{
      type: Sequelize.STRING,
      allowNull: false,

    },
    create_at:{
      type: Sequelize.DATE,
      allowNull: false,

    },
    upadete_at:{
      type: Sequelize.DATE,
      allowNull: false,
      
    },
    });
     
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');
     
  }
};
