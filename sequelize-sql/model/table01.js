const sequelize=require('../utils/connectiondb');
const { Sequelize, DataTypes } = require('sequelize');
const student_table01 = sequelize.define('student_table01', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports=student_table01;
