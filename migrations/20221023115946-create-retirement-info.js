'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RetirementInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      degree: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.STRING
      },
      carCat: {
        type: Sequelize.STRING
      },
      housePrice: {
        type: Sequelize.STRING
      },
      investments: {
        type: Sequelize.STRING
      },
      currentSaving: {
        type: Sequelize.STRING
      },
      noChild: {
        type: Sequelize.STRING
      },
      userID: {
        type: Sequelize.INTEGER
      },
      ageOfGrad: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RetirementInfos');
  }
};