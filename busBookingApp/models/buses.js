const sequelize = require("../utils/dbconnection");
const { DataTypes } = require("sequelize");

const busTable = sequelize.define(
  "buses",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    busNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    availableSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = busTable;