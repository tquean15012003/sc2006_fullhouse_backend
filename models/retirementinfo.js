'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RetirementInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RetirementInfo.init({
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    degree: DataTypes.STRING,
    salary: DataTypes.STRING,
    carCat: DataTypes.STRING,
    housePrice: DataTypes.STRING,
    investments: DataTypes.STRING,
    currentSaving: DataTypes.STRING,
    noChild: DataTypes.STRING,
    userID: DataTypes.INTEGER,
    ageOfGrad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RetirementInfo',
  });
  return RetirementInfo;
};