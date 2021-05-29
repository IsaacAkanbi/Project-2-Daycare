const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Daycare extends Model {}

Daycare.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Age_Group: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phone_Number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    Details: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Address: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Daycare',
  }
);

module.exports = Daycare;
