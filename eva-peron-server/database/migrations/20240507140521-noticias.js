'use strict';
const { DataTypes } = require('sequelize');


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('noticias', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adelanto: {
        type: DataTypes.TEXT('tiny'),
        allowNull: true,
      },
      cuerpo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fecha_creacion: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('noticias');
  }
};
